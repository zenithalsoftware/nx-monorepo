import { EntityBase } from '@zenithal/shared';
import { UserRegistered } from './events/user-registered';
import { User } from './user';

export class UserAggregate extends EntityBase<number> {
  email!: string;
  isEnabled!: boolean;
  name!: string | null;

  static register(id: number, email: string): UserAggregate {
    const user = new UserAggregate(id);
    user.updateEmail(email);
    // user.when(new UserRegistered(id, email, true));
    return user;
  }

  fromItem(source: User): UserAggregate {
    this.email = source.email;
    this.name = source.name;
    this.isEnabled = source.isEnabled;
    return this;
  }

  public updateEmail(email: string) {
    this.email = email;
  }

  protected whenUserRegistered(event: UserRegistered) {
    this.email = event.email;
    this.isEnabled = event.isEnabled;
  }
}
