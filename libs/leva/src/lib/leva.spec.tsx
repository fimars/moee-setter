import { render } from '@testing-library/react';

import Leva from './leva';

describe('Leva', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Leva />);
    expect(baseElement).toBeTruthy();
  });
});
