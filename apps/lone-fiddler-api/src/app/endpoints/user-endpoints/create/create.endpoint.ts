import { Endpoint } from '@zenithal/endpoints';
import { CreateUserRequest } from './create-user.request';
import { CreateUserResponse } from './create-user.response';

export class CreateEndpoint
  implements Endpoint<CreateUserRequest, CreateUserResponse>
{
  async handle(request: CreateUserRequest): Promise<CreateUserResponse> {
    throw new Error('Method not implemented.');
  }
}
