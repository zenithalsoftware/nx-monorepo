import { SortOrder } from './sort-order';

export interface SortOptions<T> {
  field: keyof T;
  order: SortOrder;
}
