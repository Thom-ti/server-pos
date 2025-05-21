import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartItemsService } from './cart-items.service';
import { CartItemsController } from './cart-items.controller';
import { CartItem, CartItemSchema } from './schema/cart-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CartItem.name, schema: CartItemSchema },
    ]),
  ],
  controllers: [CartItemsController],
  providers: [CartItemsService],
})
export class CartItemsModule {}
