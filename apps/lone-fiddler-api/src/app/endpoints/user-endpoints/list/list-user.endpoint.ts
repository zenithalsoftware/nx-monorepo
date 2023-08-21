import { Controller, Get } from '@nestjs/common';
import { Endpoint } from '@zenithal/endpoints';
import { UserService } from '@zenithal/lone-fiddler/core';
import { ListUserRequest } from './list-user.request';
import { ListUserResponse } from './list-user.response';

@Controller()
export class ListUserEndpoint
  implements Endpoint<ListUserRequest, ListUserResponse>
{
  constructor(private readonly userService: UserService) {}

  @Get('/users/list')
  async handle(request: ListUserRequest): Promise<ListUserResponse> {
    return this.userService.getList(
      request.criteria,
      request.sort,
      request.pagination
    );
  }
}
