import { AbstractSpecification, Specification } from './specification';

export class AndSpecification<T> extends AbstractSpecification<T> {
  private one: Specification<T>;
  private other: Specification<T>;

  public constructor(one: Specification<T>, other: Specification<T>) {
    super();
    this.one = one;
    this.other = other;
  }

  override isSatisfiedBy(candidate: T): boolean {
    return (
      this.one.isSatisfiedBy(candidate) && this.other.isSatisfiedBy(candidate)
    );
  }
}
