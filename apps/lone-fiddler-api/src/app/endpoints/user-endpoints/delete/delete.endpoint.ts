import { Controller } from '@nestjs/common';
import { Endpoint } from '@zenithal/lone-fiddler/shared';

@Controller('user')
export class DeleteEndpoint implements Endpoint<string, string> {
  constructor() {
    //
  }

  handle(id: string): string {
    return id;
  }
}
