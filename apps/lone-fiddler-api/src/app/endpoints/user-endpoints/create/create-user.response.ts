import { UserRecord } from '../user-record';

export class CreateUserResponse {
  data: UserRecord;

  constructor(data: UserRecord) {
    this.data = data;
  }
}
