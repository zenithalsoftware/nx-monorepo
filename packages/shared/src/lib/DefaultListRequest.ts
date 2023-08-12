import { IFilteredListRequest } from './interfaces/IFilteredListRequest';
import { IPagedListRequest } from './interfaces/IPagedListRequest';
import { ISortedListRequest } from './interfaces/ISortedListRequest';
import { Pagination } from './Pagination';
import { Sort } from './Sort';

export class DefaultListRequest<T>
  implements IFilteredListRequest<T>, IPagedListRequest, ISortedListRequest
{
  criteria?: T;
  pagination?: Pagination;
  sort?: Sort;
}
