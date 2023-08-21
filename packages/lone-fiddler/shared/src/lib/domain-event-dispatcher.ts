import { EntityBase } from './entity-base';

export interface DomainEventDispatcher {
  DispatchAndClearEvents(entitiesWithEvents: EntityBase[]): Promise<void>;
}
