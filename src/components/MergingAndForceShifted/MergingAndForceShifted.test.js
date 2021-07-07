import { render, screen } from '@testing-library/react';
import ZZ from './ZZ';

test('renders learn react link', () => {
  render(<ZZ />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
