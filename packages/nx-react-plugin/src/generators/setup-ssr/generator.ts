import { Tree } from '@nx/devkit';
import setupSsrGenerator from '@nx/react/src/generators/setup-ssr/setup-ssr';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await setupSsrGenerator(tree, { ...options });
}
