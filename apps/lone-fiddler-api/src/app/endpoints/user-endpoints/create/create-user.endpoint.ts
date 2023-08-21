import { Controller, Post } from '@nestjs/common';
import { Endpoint } from '@zenithal/endpoints';
import { UserService } from '@zenithal/lone-fiddler/core';
import { CreateUserRequest } from './create-user.request';
import { CreateUserResponse } from './create-user.response';

@Controller()
export class CreateUserEndpoint
  implements Endpoint<CreateUserRequest, CreateUserResponse>
{
  constructor(private readonly userService: UserService) {}

  @Post('/users/create')
  async handle(request: CreateUserRequest): Promise<CreateUserResponse> {
    throw new Error('Method not implemented.');
  }
}
