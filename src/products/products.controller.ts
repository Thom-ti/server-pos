import { Controller, Get, Param } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Controller('products')
export class ProductsController {
  constructor(private readonly productRepository: ProductsRepository) {}

  @Get()
  getAllProducts() {
    return this.productRepository.findAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productRepository.findOne(id);
  }
}
