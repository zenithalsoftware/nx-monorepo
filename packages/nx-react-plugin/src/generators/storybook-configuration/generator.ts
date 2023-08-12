import { Tree } from '@nx/devkit';
import { storybookConfigurationGenerator } from '@nx/react';
import { StorybookConfigureSchema } from './schema';

export default async function (tree: Tree, options: StorybookConfigureSchema) {
  await storybookConfigurationGenerator(tree, {
    ...options,
  });
}
