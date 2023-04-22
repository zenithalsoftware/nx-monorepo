import { Tree } from '@nrwl/devkit';
import { storybookConfigurationGenerator } from '@nrwl/react';
import { StorybookConfigureSchema } from './schema';

export default async function (tree: Tree, options: StorybookConfigureSchema) {
  await storybookConfigurationGenerator(tree, {
    ...options,
  });
}
