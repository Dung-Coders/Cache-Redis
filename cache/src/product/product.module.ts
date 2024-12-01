import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports:[CacheModule.register({
    isGlobal:true,
    ttl:2000,
    max:5
  })],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}

//yarn add @nestjs/cache-manager cache-manager@5.7.6
