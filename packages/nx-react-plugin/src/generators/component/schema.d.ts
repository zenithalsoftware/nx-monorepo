import { SupportedStyles } from '@nrwl/react';

export interface Schema {
  name: string;
  project: string;
  style: SupportedStyles;
  skipTests?: boolean;
  directory?: string;
  export?: boolean;
  pascalCaseFiles?: boolean;
  pascalCaseDirectory?: boolean;
  classComponent?: boolean;
  routing?: boolean;
  js?: boolean;
  flat?: boolean;
  globalCss?: boolean;
  fileName?: string;
  inSourceTests?: boolean;
  skipFormat?: boolean;
}
