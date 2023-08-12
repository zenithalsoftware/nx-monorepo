import { Tree } from '@nx/devkit';
import { componentTestGenerator } from '@nx/react';
import { ComponentTestSchema } from './schema';

export default async function (tree: Tree, options: ComponentTestSchema) {
  await componentTestGenerator(tree, {
    ...options,
  } as never);
}
