import { Key } from '@zenithal/shared';
import {
  AbstractSortSpecification,
  SortOptions,
} from '@zenithal/specification';
import { Item, Model, Scan } from 'nestjs-dynamoose';
import { Entity } from './entity';

export abstract class SortSpecification<
  T extends Entity
> extends AbstractSortSpecification<
  Model<T, Key>,
  Scan<Item<T>, Key>,
  SortOptions<T>
> {}
