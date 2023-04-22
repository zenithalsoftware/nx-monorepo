import { Tree } from '@nrwl/devkit';
import { hookGenerator } from '@nrwl/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await hookGenerator(tree, {
    ...options,
  });
}
