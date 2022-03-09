import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyData from '../../src/components/EmptyData';
test('renders empty data text', () => {
  render(<EmptyData />);
  const text = screen.getByText(/No data/i);
  expect(text).toBeInTheDocument();
});