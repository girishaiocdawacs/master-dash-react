import { render, screen } from '@testing-library/react';
import MappingQC from './MappingQC';

test('renders learn react link', () => {
  render(<MappingQC />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
