import { render, screen } from '@testing-library/react';
import MappingQCReport from './MappingQCReport';

test('renders learn react link', () => {
  render(<MappingQCReport />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
