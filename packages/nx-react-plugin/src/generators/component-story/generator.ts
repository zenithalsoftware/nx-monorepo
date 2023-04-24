import { componentStoryGenerator } from '@nrwl/react';
import { Tree } from '@nrwl/devkit';
import { ComponentStoryGeneratorSchema } from './schema';

export default async function (
  tree: Tree,
  options: ComponentStoryGeneratorSchema
) {
  await componentStoryGenerator(tree, {
    ...options,
  } as never);
}
