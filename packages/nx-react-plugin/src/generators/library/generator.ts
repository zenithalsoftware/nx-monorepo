import { Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await libraryGenerator(tree, { ...options });
}
