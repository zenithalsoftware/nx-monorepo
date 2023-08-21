import { ListResponse } from './list-response';
import { Pagination } from './pagination';

export interface PagedListRequest<T> extends ListResponse<T> {
  pagination?: Pagination;
}
