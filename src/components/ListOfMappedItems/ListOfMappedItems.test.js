import { render, screen } from '@testing-library/react';
import ListOfMappedItems from './ListOfMappedItems';

test('renders learn react link', () => {
  render(<ListOfMappedItems />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
