import { render, screen } from '@testing-library/react';
import NewProductMapping from './NewProductMapping';

test('renders learn react link', () => {
  render(<NewProductMapping />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
