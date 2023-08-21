export interface QueryOptions<T> {
  filter?: Partial<T>;
  sort?: { field: keyof T; order: 'ASC' | 'DESC' };
  pagination?: { limit: number; lastKey?: any };
}
