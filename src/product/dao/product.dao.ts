import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

export class ProductDao {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProductById(productId: number): Promise<Product | undefined> {
    const result = await this.productRepository.findOne({ where: { id: productId } });
    return result === null ? undefined : result;
  }

  async createProduct(user: Product): Promise<Product> {
    return this.productRepository.save(user);
  }

  async updateProduct(productId: number, updatedproductData: Partial<Product>): Promise<Product | undefined> {
    await this.productRepository.update(productId, updatedproductData);
    const result = await this.productRepository.findOne({ where: { id: productId } });
    return result === null ? undefined : result;
  }

  async deleteProduct(productId: number): Promise<void> {
    await this.productRepository.delete(productId);
  }

}