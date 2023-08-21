import { Entity } from '@zenithal/lone-fiddler/shared';

export class User extends Entity {
  email!: string;
  isEnabled!: boolean;
  name!: string | null;
}
