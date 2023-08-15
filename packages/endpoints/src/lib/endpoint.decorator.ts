import { Controller } from '@nestjs/common';
import { ControllerOptions } from '@nestjs/common/decorators/core/controller.decorator';

export function Endpoint(
  prefix: string | string[]
): (target: () => void) => void;

export function Endpoint(
  options: ControllerOptions
): (target: () => void) => void;

export function Endpoint(
  prefixOrOptions: string | string[] | ControllerOptions
): (target: () => void) => void {
  return function (target: () => void) {
    if (typeof prefixOrOptions === 'string' || Array.isArray(prefixOrOptions))
      return Controller(prefixOrOptions)(target);
    Controller(prefixOrOptions as ControllerOptions)(target);
  };
}
