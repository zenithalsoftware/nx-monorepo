import { Tree } from '@nrwl/devkit';
import { setupTailwindGenerator } from '@nrwl/react';
import { SetupTailwindOptions } from './schema';

export default async function (tree: Tree, options: SetupTailwindOptions) {
  await setupTailwindGenerator(tree, { ...options });
}
