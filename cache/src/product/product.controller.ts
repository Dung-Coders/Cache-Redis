import { Controller, Get, Inject } from '@nestjs/common';
import { ProductService } from './product.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager'

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService,
    @Inject("CACHE_MANAGER") private cacheManager: Cache
  ) {}

  //http://localhost:8080/product/set-cache
  @Get("/set-cache")
  async setCache(){
    await this.cacheManager.set("demo","Hello Cache")
    return ""
  }
  //http://localhost:8080/product/get-cache
  @Get("/get-cache")
  async getCache(){
    return await this.cacheManager.get("demo")
  }
  //http://localhost:8080/product/del-cache
  @Get("/del-cache")
  async delCache(){
    return await this.cacheManager.del("demo")
  }
}
