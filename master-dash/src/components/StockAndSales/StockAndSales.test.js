import { render, screen } from '@testing-library/react';
import StockAndSales from './StockAndSales';

test('renders learn react link', () => {
  render(<StockAndSales />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
