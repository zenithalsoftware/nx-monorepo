import { componentStoryGenerator } from '@nx/react';
import { Tree } from '@nx/devkit';
import { ComponentStoryGeneratorSchema } from './schema';

export default async function (
  tree: Tree,
  options: ComponentStoryGeneratorSchema
) {
  await componentStoryGenerator(tree, {
    ...options,
  } as never);
}
