import { AbstractSpecification, Specification } from './specification';

export class NotSpecification<T> extends AbstractSpecification<T> {
  private wrapped: Specification<T>;

  public constructor(wrapped: Specification<T>) {
    super();
    this.wrapped = wrapped;
  }

  override isSatisfiedBy(candidate: T): boolean {
    return !this.wrapped.isSatisfiedBy(candidate);
  }
}
