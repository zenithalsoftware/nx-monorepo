import { Tree } from '@nrwl/devkit';
import { hostGenerator } from '@nrwl/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await hostGenerator(tree, { ...options });
}
