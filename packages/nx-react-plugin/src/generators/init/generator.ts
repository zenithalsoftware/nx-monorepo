import { Tree } from '@nrwl/devkit';
import { initGenerator } from '@nrwl/js';
import { InitSchema } from './schema';

export default async function (tree: Tree, options: InitSchema) {
  await initGenerator(tree, { ...options });
}
