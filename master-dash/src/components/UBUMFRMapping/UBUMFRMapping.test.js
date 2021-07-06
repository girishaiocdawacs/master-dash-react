import { render, screen } from '@testing-library/react';
import UBUMFRMapping from './UBUMFRMapping';

test('renders learn react link', () => {
  render(<UBUMFRMapping />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
