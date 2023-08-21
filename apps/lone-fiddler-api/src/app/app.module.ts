import { Module } from '@nestjs/common';
import { EndpointsModule } from '@zenithal/endpoints';
import { LoggerModule } from '@zenithal/logger';
import { CreateEndpoint } from './endpoints/user-endpoints/create/create.endpoint';
// import { LoggerModule } from '@zenithal/logger';
// import { CreateEndpoint } from './endpoints/user-endpoints/create/create.endpoint';

@Module({
  imports: [
    // [EndpointsModule] wraps parts of NestJS to provide tool to implement
    // simple endpoint handlers. Endpoints are dynamically loaded via
    // the [EndpointsModule].
    //
    // The routes are determined by a directory path-based convention,
    // but fully support setting a custom path.
    EndpointsModule.forRootAsync(),
    LoggerModule,
  ],
  controllers: [CreateEndpoint],
  providers: [],
})
export class AppModule {}
