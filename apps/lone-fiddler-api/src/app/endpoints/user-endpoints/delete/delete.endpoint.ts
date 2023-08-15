import { Delete } from '@zenithal/endpoints';
import { Endpoint } from '@zenithal/lone-fiddler/shared';

export class DeleteEndpoint implements Endpoint<string, string> {
  @Delete(':id')
  handle(id: string): string {
    return id;
  }
}
