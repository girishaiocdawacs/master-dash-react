import { render, screen } from '@testing-library/react';
import AddScreen from './AddScreen';

test('renders learn react link', () => {
  render(<AddScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
