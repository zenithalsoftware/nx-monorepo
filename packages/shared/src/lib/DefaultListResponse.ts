import { IFilteredListResponse } from './interfaces/IFilteredListResponse';
import { IListResponse } from './interfaces/IListResponse';
import { IPagedListResponse } from './interfaces/IPagedListResponse';
import { ISortedListResponse } from './interfaces/ISortedListResponse';
import { PageInfo } from './PageInfo';

export class DefaultListResponse<T>
  implements
    IListResponse<T>,
    IFilteredListResponse,
    IPagedListResponse,
    ISortedListResponse
{
  data?: T[];
  pageInfo?: PageInfo;
}
