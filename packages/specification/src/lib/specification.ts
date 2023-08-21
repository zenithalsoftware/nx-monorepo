export interface Specification<T, R> {
  apply(input: T): R | Promise<R>;
}
