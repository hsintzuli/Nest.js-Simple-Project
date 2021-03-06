import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { V1Module } from './v1/v1.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExamineTimeInterceptor } from './interceptors/examineTime.interceptros';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    V1Module,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ExamineTimeInterceptor,
    },
  ],
})
export class AppModule {}
