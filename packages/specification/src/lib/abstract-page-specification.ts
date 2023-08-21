import { AbstractSpecification } from './abstract-specification';
import { PaginationOptions } from './pagination-options';

export abstract class AbstractPageSpecification<
  T,
  R,
  O = PaginationOptions
> extends AbstractSpecification<T, R> {
  protected options: O;

  public constructor(options: O) {
    super();
    this.options = options;
  }
}
