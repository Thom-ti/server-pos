import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
// import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Injectable()
export class CartItemsService {
  create(createCartItemDto: CreateCartItemDto) {
    return 'This action adds a new cartItem';
  }

  // update(id: number, updateCartItemDto: UpdateCartItemDto) {
  //   return `This action updates a #${id} cartItem`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cartItem`;
  // }
}
