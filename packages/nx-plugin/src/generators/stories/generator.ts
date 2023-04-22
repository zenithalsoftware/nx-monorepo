import { Tree } from '@nrwl/devkit';
import { storiesGenerator } from '@nrwl/react';
import { StorybookStoriesSchema } from './schema';

export default async function (tree: Tree, options: StorybookStoriesSchema) {
  await storiesGenerator(tree, { ...options });
}
