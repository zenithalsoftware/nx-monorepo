import { CoreModule } from './core.module';

describe('loneFiddlerPackagesCore', () => {
  it('should work', () => {
    expect(new CoreModule()).toEqual('core');
  });
});
