import { WhereQueryData } from './WhereQueryData';

export abstract class Specification<T> {
  abstract isSatisfiedBy(candidate: T): boolean;

  abstract toWhereQuery(alias?: string): WhereQueryData;

  and(otherSpecification: Specification<T>): AndSpecification<T> {
    return new AndSpecification(this, otherSpecification);
  }

  // TODO: other composites
}

export class AndSpecification<T> extends Specification<T> {
  constructor(
    private leftCondition: Specification<T>,
    private rightCondition: Specification<T>
  ) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return (
      this.leftCondition.isSatisfiedBy(candidate) &&
      this.rightCondition.isSatisfiedBy(candidate)
    );
  }

  toWhereQuery(alias?: string): WhereQueryData {
    const leftQueryData = this.leftCondition.toWhereQuery(alias);
    const rightQueryData = this.rightCondition.toWhereQuery(alias);

    return {
      query: `${leftQueryData.query} AND ${rightQueryData.query}`,
      params: { ...leftQueryData.params, ...rightQueryData.params },
    };
  }
}
