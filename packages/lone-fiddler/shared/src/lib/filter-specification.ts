import { Key } from '@zenithal/shared';
import { AbstractFilterSpecification } from '@zenithal/specification';
import { Item, Model, Scan } from 'nestjs-dynamoose';
import { Entity } from './entity';

export abstract class FilterSpecification<
  T extends Entity,
  C
> extends AbstractFilterSpecification<Model<T, Key>, Scan<Item<T>, Key>, C> {}
