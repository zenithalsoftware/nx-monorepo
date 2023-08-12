import { InjectRepository } from '@nestjs/typeorm';
import { Pagination, Specification } from '@zenithal/shared';
import { Repository } from 'typeorm';
import { User } from '../../domain/user-aggregate/user';

export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
    userRepository.extend({
      getMany: async (
        spec: Specification<User>,
        pagination?: Pagination
      ): Promise<User[]> => {
        const { query, params } = spec.toWhereQuery();

        const queryBuilder = this.userRepository
          .createQueryBuilder('user')
          .select()
          .where(query, params);

        if (pagination) {
          queryBuilder.skip(pagination.page).take(pagination.pageSize);
        }

        return await queryBuilder.getMany();
      },
    });
  }
}
