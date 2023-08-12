import { SupportedStyles } from '@nx/react';
import { Linter } from '@nx/linter';

export interface Schema {
  classComponent?: boolean;
  compiler?: 'babel' | 'swc';
  devServerPort?: number;
  directory?: string;
  e2eTestRunner: 'cypress' | 'none';
  globalCss?: boolean;
  host?: string;
  js?: boolean;
  linter: Linter;
  name: string;
  pascalCaseFiles?: boolean;
  routing?: boolean;
  setParserOptionsProject?: boolean;
  skipFormat: boolean;
  skipWorkspaceJson?: boolean;
  ssr?: boolean;
  strict?: boolean;
  style: SupportedStyles;
  tags?: string;
  unitTestRunner: 'jest' | 'vitest' | 'none';
}
