import {
  addDependenciesToPackageJson,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  installPackagesTask,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
import { libraryGenerator } from '@nrwl/react';
import * as path from 'path';
import { Schema } from './schema';

interface NormalizedSchema extends Schema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(tree: Tree, options: Schema): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
  };
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.projectRoot,
    templateOptions
  );
}

export default async function (tree: Tree, options: Schema) {
  const normalizedOptions = normalizeOptions(tree, options);

  await libraryGenerator(tree, {
    ...options,
    style: 'styled-components',
    bundler: 'rollup',
    linter: Linter.EsLint,
    unitTestRunner: 'jest',
    routing: false,
    js: false,
    globalCss: false,
    pascalCaseFiles: false,
  });

  addFiles(tree, normalizedOptions);

  addDependenciesToPackageJson(
    tree,
    {
      '@mui/icons-material': '^5.11.11',
      '@mui/material': '^5.11.11',
      '@mui/x-data-grid': '^6.0.0',
      react: '^18.2.0',
      'react-router-dom': '^6.8.2',
      'styled-components': '^5.3.6',
    },
    {},
    './package.json'
  );

  installPackagesTask(tree);
  await formatFiles(tree);
}
