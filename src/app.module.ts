import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pos-db'),
    ProductsModule,
    CartModule,
    CheckoutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
