import { AggregateRoot } from '@node-ts/ddd';
import { AggregateRootProperties } from '@node-ts/ddd/dist/domain/aggregate-root-properties';
import { Column, Entity, ObjectId, PrimaryGeneratedColumn } from 'typeorm';

export type UserProperties = AggregateRootProperties;

@Entity()
export class User extends AggregateRoot<ObjectId> {
  @PrimaryGeneratedColumn()
  id: ObjectId;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
