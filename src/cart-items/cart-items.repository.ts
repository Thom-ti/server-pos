import { Injectable } from '@nestjs/common';

@Injectable()
export class CartItemsRepository {
  findAll() {
    return `This action returns all cartItems`;
  }
}
