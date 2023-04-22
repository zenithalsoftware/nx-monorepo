import { Tree } from '@nrwl/devkit';
import { componentGenerator } from '@nrwl/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await componentGenerator(tree, {
    ...options,
  });
}
