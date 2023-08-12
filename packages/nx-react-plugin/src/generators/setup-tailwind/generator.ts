import { Tree } from '@nx/devkit';
import { setupTailwindGenerator } from '@nx/react';
import { SetupTailwindOptions } from './schema';

export default async function (tree: Tree, options: SetupTailwindOptions) {
  await setupTailwindGenerator(tree, { ...options });
}
