export interface StorybookStoriesSchema {
  project: string;
  generateCypressSpecs: boolean;
  js?: boolean;
  cypressProject?: string;
  ignorePaths?: string[];
  skipFormat?: boolean;
}
