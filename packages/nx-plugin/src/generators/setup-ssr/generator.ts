import { Tree } from '@nrwl/devkit';
import setupSsrGenerator from '@nrwl/react/src/generators/setup-ssr/setup-ssr';
import { Schema } from './schema';

export default async function (tree: Tree, options: Schema) {
  await setupSsrGenerator(tree, { ...options });
}
