import { render, screen } from '@testing-library/react';
import MappingCorrection from './MappingCorrection';

test('renders learn react link', () => {
  render(<MappingCorrection />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
