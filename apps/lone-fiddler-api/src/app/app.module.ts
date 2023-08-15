import { Module } from '@nestjs/common';
import { EndpointsModule } from '@zenithal/endpoints';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // [EndpointsModule] wraps parts of NestJS to provide tool to implement
    // simple endpoint handlers. Endpoints are dynamically loaded via
    // the [EndpointsModule].
    //
    // The routes are determined by a directory path-based convention,
    // but fully support setting a custom path.
    EndpointsModule.forRootAsync(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
