import { Key } from '@zenithal/shared';
import { AbstractPageSpecification } from '@zenithal/specification';
import { Item, Model, Scan } from 'nestjs-dynamoose';
import { Entity } from './entity';
import { Pagination } from './pagination';

export class PageSpecification<
  T extends Entity
> extends AbstractPageSpecification<
  Model<T, Key>,
  Scan<Item<T>, Key>,
  Pagination
> {
  apply(
    input: Model<T, Key>
  ): Promise<Scan<Item<T>, Key>> | Scan<Item<T>, Key> {
    let scan = input.scan();

    if (this.options) {
      if (this.options.lastKey) {
        scan = scan.startAt(this.options.lastKey);
      }

      scan = scan.limit(this.options.limit);
    }

    return scan;
  }
}
