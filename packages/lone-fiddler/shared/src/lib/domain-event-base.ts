export abstract class DomainEventBase extends Notification {
  public dateOccurred: Date = new Date();
}
