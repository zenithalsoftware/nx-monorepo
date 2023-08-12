import { applicationGenerator } from '@nx/react';
import { Tree } from '@nx/devkit';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await applicationGenerator(tree, {
    ...options,
  } as never);
}
