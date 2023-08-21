import { Event } from '@node-ts/bus-messages';
import { Dayjs } from 'dayjs';

export abstract class DomainEventBase extends Event {
  readonly dateOccurred: Dayjs = new Dayjs();
}
