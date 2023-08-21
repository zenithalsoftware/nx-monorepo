import { ListResponse } from './list-response';
import { PageInfo } from './page-info';

export interface PagedListResponse<T> extends ListResponse<T> {
  pageInfo?: PageInfo;
}
