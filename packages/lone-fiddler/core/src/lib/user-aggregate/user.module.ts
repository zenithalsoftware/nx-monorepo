import { Module } from '@nestjs/common';
import { InfrastructureModule } from '@zenithal/lone-fiddler/infrastructure';
import { UserService } from './services/user.service';
import { User } from './user';
import { UserSchema } from './user.schema';

const providers = [UserService];

@Module({
  imports: [
    InfrastructureModule.forFeature<User>({
      name: 'User',
      schema: UserSchema,
    }),
  ],
  providers: [...providers],
  exports: [...providers],
})
export class UserModule {}
