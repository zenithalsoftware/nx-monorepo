import { render } from '@testing-library/react';

import TestComponentLibrary from './test-component-library';

describe('TestComponentLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestComponentLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
