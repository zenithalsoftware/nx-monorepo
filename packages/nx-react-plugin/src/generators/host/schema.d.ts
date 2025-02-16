import { SupportedStyles } from '@nx/react';
import { Linter } from '@nx/linter';

export interface Schema {
  classComponent?: boolean;
  compiler?: 'babel' | 'swc';
  devServerPort?: number;
  directory?: string;
  e2eTestRunner: 'cypress' | 'none';
  globalCss?: boolean;
  js?: boolean;
  linter: Linter;
  name: string;
  pascalCaseFiles?: boolean;
  remotes?: string[];
  setParserOptionsProject?: boolean;
  skipFormat?: boolean;
  skipWorkspaceJson?: boolean;
  ssr?: boolean;
  strict?: boolean;
  style: SupportedStyles;
  tags?: string;
  unitTestRunner: 'jest' | 'vitest' | 'none';
  minimal?: boolean;
}

export interface NormalizedSchema extends Schema {
  appProjectRoot: string;
  e2eProjectName: string;
  projectName: string;
}
