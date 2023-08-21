import { SortSpecification } from '@zenithal/lone-fiddler/shared';
import { Key } from '@zenithal/shared';
import { Item, Model, Scan } from 'nestjs-dynamoose';
import { User } from '../user';

export class UserSortSpecification extends SortSpecification<User> {
  apply(
    input: Model<User, Key>
  ): Promise<Scan<Item<User>, Key>> | Scan<Item<User>, Key> {
    return input.scan();
  }
}
