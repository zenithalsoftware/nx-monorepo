import { Criteria } from './criteria';

export interface FilteredListRequest<T = Criteria> {
  filter: T;
}
