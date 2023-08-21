export interface ReadRepositoryBase<T = object> {
  GetByIdAsync<TId>(id: TId): Promise<T>;

  GetBySpecAsync(Specification: any): Promise<T>;
}
