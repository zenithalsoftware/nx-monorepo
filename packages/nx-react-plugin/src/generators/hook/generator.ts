import { Tree } from '@nx/devkit';
import { hookGenerator } from '@nx/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await hookGenerator(tree, {
    ...options,
  });
}
