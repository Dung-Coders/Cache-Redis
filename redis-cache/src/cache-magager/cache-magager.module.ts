import { Global, Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';

@Global()
@Module({
    imports:[CacheModule.registerAsync({
        imports:[ConfigModule],
        useFactory: (configService:ConfigService)=>({
            store: redisStore,
            host: configService.get("REDIS_HOST"),
            port: configService.get("REDIS_PORT"),
            auth_pass: configService.get("REDIS_PASS"),
            ttl: configService.get("REDIS_TTL")
        }),
        inject: [ConfigService],
        isGlobal:true
    })]
})
export class CacheManagerModule {}
