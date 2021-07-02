import { render, screen } from '@testing-library/react';
import DivisionWiseMapping from './DivisionWiseMapping';

test('renders learn react link', () => {
  render(<DivisionWiseMapping />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
