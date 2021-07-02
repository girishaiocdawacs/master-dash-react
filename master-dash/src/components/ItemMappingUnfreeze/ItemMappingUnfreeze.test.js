import { render, screen } from '@testing-library/react';
import ItemMappingUnfreeze from './ItemMappingUnfreeze';

test('renders learn react link', () => {
  render(<ItemMappingUnfreeze />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
