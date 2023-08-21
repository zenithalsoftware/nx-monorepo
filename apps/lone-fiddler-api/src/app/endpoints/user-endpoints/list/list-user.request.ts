import { User } from '@zenithal/lone-fiddler/core';
import { Pagination } from '@zenithal/lone-fiddler/shared';
import { SortOptions } from '@zenithal/specification';

export class ListUserRequest {
  criteria: any;
  sort: SortOptions<User>;
  pagination: Pagination;
}
