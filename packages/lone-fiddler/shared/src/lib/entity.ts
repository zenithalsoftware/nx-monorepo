import { Key } from '@zenithal/shared';
import { Item } from 'dynamoose/dist/Item';

export abstract class Entity extends Item implements Key {
  id!: number;
}
