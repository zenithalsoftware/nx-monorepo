import { Tree } from '@nx/devkit';
import { hostGenerator } from '@nx/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await hostGenerator(tree, { ...options });
}
