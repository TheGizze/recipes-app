import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Router } from '../Router';

jest.mock('../Router', () => {
  return {
    __esModule: true,
    Router: jest.fn(),
  };
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Root App', () => {
  it('Should match snapshot', () => {
    const mockRouter = Router as jest.Mock;
    mockRouter.mockReturnValue(<div data-testid="mock-routes" />);
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it('Should call routes from Router component', () => {
    const mockRouter = Router as jest.Mock;
    mockRouter.mockReturnValue(<div data-testid="mock-routes" />);
    const { findByTestId } = render(<App />);
    expect(findByTestId('mock-routes')).not.toBeNull();
    expect(mockRouter).toHaveBeenCalledTimes(1);
  });
});
