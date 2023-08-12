import { Tree } from '@nx/devkit';
import { storiesGenerator } from '@nx/react';
import { StorybookStoriesSchema } from './schema';

export default async function (tree: Tree, options: StorybookStoriesSchema) {
  await storiesGenerator(tree, { ...options });
}
