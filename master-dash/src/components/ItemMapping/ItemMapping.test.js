import { render, screen } from '@testing-library/react';
import ItemMapping from './ItemMapping';

test('renders learn react link', () => {
  render(<ItemMapping />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
