import React from 'react';

import { render } from '../utils/test-intl';

import IndexPage from './index';

jest.mock('../assets');

describe('IndexPage', () => {
  it('renders without crash', () => {
    render(<IndexPage />);
  });
});
