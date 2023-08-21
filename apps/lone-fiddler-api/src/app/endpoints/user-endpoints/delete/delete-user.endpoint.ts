import { Delete } from '@nestjs/common';
import { Endpoint } from '@zenithal/endpoints';

export class DeleteUserEndpoint implements Endpoint<string, string> {
  @Delete(':id')
  handle(id: string): string {
    return id;
  }
}
