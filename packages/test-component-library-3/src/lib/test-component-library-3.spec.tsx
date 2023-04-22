import { render } from '@testing-library/react';

import TestComponentLibrary3 from './test-component-library-3';

describe('TestComponentLibrary3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestComponentLibrary3 />);
    expect(baseElement).toBeTruthy();
  });
});
