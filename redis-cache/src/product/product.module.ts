import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

//yarn add @nestjs/cache-manager cache-manager@5.7.6
