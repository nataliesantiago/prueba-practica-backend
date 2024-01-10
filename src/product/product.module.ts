import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductDao } from './dao/product.dao';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
  ],
  providers: [ProductService, ProductDao, JwtService],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
