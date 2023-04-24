import { Tree } from '@nrwl/devkit';
import { reduxGenerator } from '@nrwl/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await reduxGenerator(tree, { ...options });
}
