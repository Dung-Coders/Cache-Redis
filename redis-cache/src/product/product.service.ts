import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Cache } from 'cache-manager'
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager:Cache
  ) {}
  //search logic
  async searchProduct(name) {
    let dataCache = this.cacheManager.get("SEARCH_PRODUCT")

    //CHECK CACHE
    if(dataCache){
        return dataCache
    }
    let data = await this.prismaService.product.findMany({
      where: {
        product_name: {
          contains: name,
        },
      },
    });

    this.cacheManager.set("SEARCH_PRODUCT",data)
    return data;
  }
}
