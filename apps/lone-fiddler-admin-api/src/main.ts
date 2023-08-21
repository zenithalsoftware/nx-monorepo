/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  LoggerService,
  LogLevel,
} from '@nestjs/common/services/logger.service';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@zenithal/logger';
import { AppModule } from './app/app.module';

const logger: LoggerService | LogLevel[] | false = process.env.LOG_LEVEL
  ? [process.env.LOG_LEVEL as LogLevel]
  : ['log', 'error', 'warn', 'debug'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: logger,
  });
  app.useLogger(app.get(Logger));
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 4000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
