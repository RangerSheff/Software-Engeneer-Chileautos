import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { loggerMiddlewareOptions } from './config/logger-middleware.options';
import { configModuleOptions } from './config/configuration.options';
import { AxiosClient } from './client/axios.client';

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions), LoggerModule.forRootAsync(loggerMiddlewareOptions)],
  providers: [AxiosClient],
  exports: [ConfigModule, LoggerModule, AxiosClient],
})
export class SharedModule {}
