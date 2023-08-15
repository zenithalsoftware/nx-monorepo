import { Controller, DynamicModule, Module, Type } from '@nestjs/common';

import { glob } from 'glob';
import { Endpoint } from './endpoint';

@Module({})
export class EndpointsModule {
  static forRootAsync(
    path = 'src/**/endpoints/**/*.endpoint.ts'
  ): DynamicModule {
    return {
      module: EndpointsModule,
      imports: [EndpointsInjectionModule.forRootAsync(path)],
      providers: [],
      exports: [],
    };
  }
}

class EndpointsInjectionModule {
  static async forRootAsync(path: string): Promise<DynamicModule> {
    const endpointsPath = glob.sync(path);
    const endpointsRelativePathWithoutExtension = endpointsPath
      // Replace src, because you are probably running the code
      // from dist folder
      .map((path) => path.replace('src/', './../'))
      .map((path) => path.replace('.ts', ''));

    const endpointControllers: Type<Endpoint>[] = [];
    const importedModules = await Promise.all(
      endpointsRelativePathWithoutExtension.map(async (path) => ({
        path,
        endpoint: await import(path),
      }))
    );

    importedModules.forEach((modules) => {
      // Intending for /user/create, to create an endpoint path by convention.
      let path = modules.path;
      path = path.replace('./../', '');
      path = path.replace('app/', '');
      path = path.replace('-endpoints', '');

      // remove `/{action}.endpoint`
      path = path.substring(0, path.length - path.lastIndexOf('/'));

      const endpoint: Type<Endpoint> =
        modules.endpoint[Object.keys(modules.endpoint)[0]];

      if (!path) {
        throw new Error(
          `Endpoint ${endpoint.prototype.name} does not have a path`
        );
      }

      Controller(path)(endpoint);
      endpointControllers.push(endpoint);
    });

    return {
      module: EndpointsInjectionModule,
      imports: [],
      controllers: [...endpointControllers],
      exports: [...endpointControllers],
    };
  }
}
