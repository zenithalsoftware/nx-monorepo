import { Tree } from '@nx/devkit';
import { cypressComponentConfigGenerator } from '@nx/react';
import { CypressComponentConfigurationSchema } from './schema';

export default async function (
  tree: Tree,
  options: CypressComponentConfigurationSchema
) {
  await cypressComponentConfigGenerator(tree, {
    ...options,
  });
}
