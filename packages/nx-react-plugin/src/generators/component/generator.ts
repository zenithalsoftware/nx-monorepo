import { Tree } from '@nx/devkit';
import { componentGenerator } from '@nx/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await componentGenerator(tree, {
    ...options,
  });
}
