import { Tree } from '@nx/devkit';
import { remoteGenerator } from '@nx/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await remoteGenerator(tree, { ...options });
}
