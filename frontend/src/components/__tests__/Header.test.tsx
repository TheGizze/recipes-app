import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../Header';
import { MemoryRouter } from 'react-router-dom';

const TestWrapper = () => {
  return (
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
};

describe('Header tests', () => {
  it('Should match snapshot', () => {
    const { container } = render(<TestWrapper />);
    expect(container).toMatchSnapshot();
  });
});
