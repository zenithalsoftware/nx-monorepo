import { Tree } from '@nrwl/devkit';
import { remoteGenerator } from '@nrwl/react';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await remoteGenerator(tree, { ...options });
}
