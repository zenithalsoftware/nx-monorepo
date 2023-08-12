import { Event } from '@node-ts/bus-messages';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';

export abstract class DomainEventBase extends Event {
  readonly dateOccurred: Dayjs = dayjs();
}
