import { Key } from '@zenithal/shared';
import { AbstractCompositeSpecification } from '@zenithal/specification';
import { Item, Model, Scan } from 'nestjs-dynamoose';
import { Entity } from './entity';

export class CompositeSpecification<
  T extends Entity
> extends AbstractCompositeSpecification<Model<T, Key>, Scan<Item<T>, Key>> {}
