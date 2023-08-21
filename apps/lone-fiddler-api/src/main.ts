/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@zenithal/logger';
import { AppModule } from './app/app.module';

console.log(AppModule);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  SwaggerModule.setup(
    'api',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Lone Fiddler API')
        .setDescription('The Lone Fiddler API description')
        .setVersion('1.0')
        .addTag('users')
        .build()
    )
  );

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
