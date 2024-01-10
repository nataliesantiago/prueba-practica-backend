import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards} from '@nestjs/common';
import {plainToInstance} from "class-transformer";
import {JwtAuthGuard} from "../auth/guards/jwt-auth/jwt-auth.guard";
import { ProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {
  }

  @Get()
  async findAll() {
    return await this.productService.getAllProducts();
  }

  @Get(':productId')
  async findOne(@Param('productId') id: number) {
    return await this.productService.getProductById(id);
  }

  @Post()
  async create(@Body() productDto: ProductDto){
    const product: Product = plainToInstance(Product, productDto);
    return await this.productService.createProduct(product);
  }

  @Put(':productId')
  async update(@Param('productId') id: number, @Body() productDto: ProductDto) {
    const product: Product = plainToInstance(Product, productDto);
    return await this.productService.updateProduct(id, product);
  }

  @Delete(':productId')
  @HttpCode(204)
  async delete(@Param('productId') id: number) {
    return await this.productService.deleteProduct(id);
  }
}
