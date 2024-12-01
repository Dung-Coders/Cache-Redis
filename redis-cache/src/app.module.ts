import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { CacheManagerModule } from './cache-magager/cache-magager.module'

@Module({
  imports: [ProductModule,
    ConfigModule.forRoot({isGlobal:true}), 
    PrismaModule,
    CacheManagerModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
