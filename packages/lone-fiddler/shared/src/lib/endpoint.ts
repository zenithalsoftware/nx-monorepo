export interface Endpoint<
  TRequest = object | string | number | undefined,
  TResponse = object | string | number | undefined
> {
  handle(request: TRequest): TResponse | Promise<TResponse>;
}
