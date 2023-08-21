import { Injectable } from '@nestjs/common';
import { Repository } from '@zenithal/lone-fiddler/infrastructure';
import {
  CompositeSpecification,
  InjectRepository,
  PageSpecification,
  Pagination,
} from '@zenithal/lone-fiddler/shared';

import { SortOptions } from '@zenithal/specification';
import { UserFilterCriteria } from '../specifications/user-filter-criteria';
import { UserFilterSpecification } from '../specifications/user-filter-specification';
import { UserSortSpecification } from '../specifications/user-sort-specification';

import { User } from '../user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  getUser(id: number) {
    return this.userRepository.getByKey({ id });
  }

  async getList(
    criteria: UserFilterCriteria,
    sort: SortOptions<User>,
    page: Pagination
  ) {
    const compositeSpecResult = await this.userRepository.getBySpec(
      new CompositeSpecification(
        new UserFilterSpecification(criteria),
        new UserSortSpecification(sort),
        new PageSpecification(page)
      )
    );

    const specResult = await this.userRepository.getBySpec(
      new UserFilterSpecification(criteria)
    );

    return compositeSpecResult;
  }
}
