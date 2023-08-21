import { AggregateRoot as BaseAggregateRoot } from '@node-ts/ddd';

export abstract class AggregateRoot<
  TId = number
> extends BaseAggregateRoot<TId> {
  protected constructor(id: TId) {
    super(id);
  }
}
