import { render } from '@testing-library/react';

import { DynamicTheme } from './dynamic-theme.tsx';

describe('DynamicTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DynamicTheme />);
    expect(baseElement).toBeTruthy();
  });
});
