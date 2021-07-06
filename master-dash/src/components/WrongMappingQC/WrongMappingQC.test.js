import { render, screen } from '@testing-library/react';
import WrongMappingQC from './WrongMappingQC';

test('renders learn react link', () => {
  render(<WrongMappingQC />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
