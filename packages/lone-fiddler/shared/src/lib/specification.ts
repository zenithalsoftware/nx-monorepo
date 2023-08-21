import { Key } from '@zenithal/shared';
import { AbstractSpecification } from '@zenithal/specification';
import { Item, Model, Scan } from 'nestjs-dynamoose';

import { Entity } from './entity';

export abstract class Specification<
  T extends Entity
> extends AbstractSpecification<Model<T, Key>, Scan<Item<T>, Key>> {}
