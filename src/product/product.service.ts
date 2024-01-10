import { Injectable } from '@nestjs/common';
import { ProductDao } from './dao/product.dao';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    private readonly productDao: ProductDao,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productDao.getAllProducts();
  }

  async getProductById(productId: number): Promise<Product | undefined> {
    return this.productDao.getProductById(productId);
  }

  async createProduct(product: Product): Promise<Product> {
    return this.productDao.createProduct(product);
  }

  async updateProduct(productId: number, updatedProductData: Partial<Product>): Promise<Product | undefined> {
    return this.productDao.updateProduct(productId, updatedProductData);
  }

  async deleteProduct(productId: number): Promise<void> {
    await this.productDao.deleteProduct(productId);
  }

}