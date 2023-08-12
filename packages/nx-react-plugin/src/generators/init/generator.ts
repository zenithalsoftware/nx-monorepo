import { Tree } from '@nx/devkit';
import { initGenerator } from '@nx/js';
import { InitSchema } from './schema';

export default async function (tree: Tree, options: InitSchema) {
  await initGenerator(tree, { ...options });
}
