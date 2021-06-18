import { render, screen } from '@testing-library/react';
import DashNav from './DashNav';

test('renders learn react link', () => {
  render(<DashNav />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
