import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  findAll() {
    return `This action returns all products`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }
}
