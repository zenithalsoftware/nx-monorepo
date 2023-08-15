import { Controller } from '@nestjs/common/interfaces';

// export interface Endpoint<
//   TRequest = object | string | number | undefined,
//   TResponse = object | string | number | undefined
// > extends Controller {
//   path: string | string[];
//
//   handle(request: TRequest): TResponse | Promise<TResponse>;
// }
//

export interface Endpoint<
  TRequest = object | string | number | undefined,
  TResponse = object | string | number | undefined
> extends Controller {
  path?: string | string[] | undefined;

  handle(
    request: NonNullable<TRequest>
  ): NonNullable<TResponse> | Promise<NonNullable<TResponse>>;
}
