import { Tree } from '@nx/devkit';
import { libraryGenerator } from '@nx/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await libraryGenerator(tree, { ...options });
}
