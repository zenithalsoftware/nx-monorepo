import { DomainEventBase } from '@zenithal/shared';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment

export class UserDeletedEvent extends DomainEventBase {
  static readonly NAME = 'user-deleted-event';
  $name = UserDeletedEvent.NAME;
  $version = 0;

  constructor() {
    super();
  }
}
