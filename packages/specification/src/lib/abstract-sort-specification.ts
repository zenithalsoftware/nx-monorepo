import { AbstractSpecification } from './abstract-specification';
import { SortOptions } from './sort-options';

export abstract class AbstractSortSpecification<
  T,
  R,
  O extends SortOptions<unknown>
> extends AbstractSpecification<T, R> {
  protected options: O;

  public constructor(options: O) {
    super();
    this.options = options;
  }
}
