import { DomainEventBase } from '@zenithal/shared';
import { User } from '../user';

export class UserCreatedEvent extends DomainEventBase {
  static readonly NAME = 'user-created-event';
  $name = UserCreatedEvent.NAME;
  $version = 0;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(user: User) {
    super();
  }
}
