import { Inject } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/ban-types
export function getRepositoryToken(entity: Function): Function | string {
  if (entity === null || entity === undefined) {
    throw new Error('Cannot determine entity for the given repository');
  }

  return `${entity.constructor.name.toUpperCase()}_REPOSITORY`;
}

export const InjectRepository = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  entity: Function
): ReturnType<typeof Inject> => Inject(getRepositoryToken(entity));
