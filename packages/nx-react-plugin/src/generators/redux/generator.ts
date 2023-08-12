import { Tree } from '@nx/devkit';
import { reduxGenerator } from '@nx/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await reduxGenerator(tree, { ...options });
}
