import { render } from '@testing-library/react';

import AppContentContainer from './app-content-container';

describe('AppContentContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppContentContainer />);
    expect(baseElement).toBeTruthy();
  });
});
