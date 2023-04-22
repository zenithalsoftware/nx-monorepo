import { Tree } from '@nrwl/devkit';
import { componentTestGenerator } from '@nrwl/react';
import { ComponentTestSchema } from './schema';

export default async function (tree: Tree, options: ComponentTestSchema) {
  await componentTestGenerator(tree, {
    ...options,
  } as never);
}
