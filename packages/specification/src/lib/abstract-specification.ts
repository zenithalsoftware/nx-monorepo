import { Specification } from './specification';

export abstract class AbstractSpecification<T, R>
  implements Specification<T, R>
{
  abstract apply(input: T): R | Promise<R>;
}
