import { Module } from '@nestjs/common';
import { UserModule } from './user-aggregate';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [UserModule],
})
export class LoneFiddlerCoreModule {}
