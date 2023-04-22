import { render } from '@testing-library/react';

import TestComponentLibrary2 from './test-component-library-2';

describe('TestComponentLibrary2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestComponentLibrary2 />);
    expect(baseElement).toBeTruthy();
  });
});
