import { DomainEventBase } from './DomainEventBase';

export abstract class EntityBase<T = string> {
  id: T | null = null;
  public readonly domainEvents: Readonly<DomainEventBase>[] = [];

  constructor(id: T) {
    this.id = id;
  }

  protected registerDomainEvent(domainEvent: DomainEventBase): void {
    this.domainEvents.push(Object.freeze(domainEvent));
  }

  private clearDomainEvents(): void {
    this.domainEvents.splice(0, this.domainEvents.length);
  }
}
