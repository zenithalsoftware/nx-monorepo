import { AbstractSpecification } from './abstract-specification';
import { Specification } from './specification';

export abstract class AbstractCompositeSpecification<
  T,
  R
> extends AbstractSpecification<T, R> {
  protected specifications: Specification<T, R>[];

  public constructor(...specifications: Specification<T, R>[]) {
    super();
    this.specifications = specifications;
  }

  override async apply(input: T): Promise<R> {
    let result: R | undefined;
    for (const specification of this.specifications) {
      result = await specification.apply(input);
    }

    if (result === undefined) {
      throw new Error('Specification not satisfied');
    }

    return result;
  }
}
