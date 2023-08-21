import { AbstractSpecification } from './abstract-specification';

export abstract class AbstractFilterSpecification<
  T,
  R,
  C
> extends AbstractSpecification<T, R> {
  protected criteria: C;

  public constructor(criteria: C) {
    super();
    this.criteria = criteria;
  }
}
