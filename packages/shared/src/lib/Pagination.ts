// https://dynamoosejs.com/guide/Query#querystartatkey
import { ObjectType } from 'dynamoose/dist/General';

export type LastKey = ObjectType;

export interface Pagination {
  page: LastKey;
  pageSize: number;
}
