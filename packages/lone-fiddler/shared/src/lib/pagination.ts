import { ObjectType } from 'nestjs-dynamoose';

export interface Pagination {
  limit: number;
  lastKey: ObjectType;
}
