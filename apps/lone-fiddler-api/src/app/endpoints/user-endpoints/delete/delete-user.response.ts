import { UserRecord } from '../user-record';

export class DeleteUserResponse {
  data: UserRecord;

  constructor(data: UserRecord) {
    this.data = data;
  }
}
