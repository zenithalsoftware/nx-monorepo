import { Module } from '@nestjs/common';
import { DomainModule } from '../domain/domain.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DomainModule, InfrastructureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
