import { Specification, WhereQueryData } from '@zenithal/shared';
import { User } from '../user';

export class UserListSpecification extends Specification<User> {
  isSatisfiedBy(): boolean {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toWhereQuery(alias: string | undefined): WhereQueryData {
    return undefined;
  }
}
