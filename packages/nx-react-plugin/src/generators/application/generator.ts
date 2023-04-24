import { applicationGenerator } from '@nrwl/react';
import { Tree } from '@nrwl/devkit';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await applicationGenerator(tree, {
    ...options,
  } as never);
}
