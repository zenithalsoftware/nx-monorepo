import { FilterSpecification } from '@zenithal/lone-fiddler/shared';
import { Key } from '@zenithal/shared';
import { Item, Model, Scan } from 'nestjs-dynamoose';
import { User } from '../user';
import { UserFilterCriteria } from './user-filter-criteria';

export class UserFilterSpecification extends FilterSpecification<
  User,
  UserFilterCriteria
> {
  apply(
    input: Model<User, Key>
  ): Promise<Scan<Item<User>, Key>> | Scan<Item<User>, Key> {
    return input.scan();
  }
}
