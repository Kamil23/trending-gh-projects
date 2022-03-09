import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItem from '../../src/components/ListItem';
test('renders empty data text', () => {
  render(
    <ListItem
      author="Kamil"
      description="Lorem ipsum sit dolor"
      language="typescript"
      name="project"
      stars={2734}
      url='https://google.pl' />);
  const renderedLanguage = screen.getByText(/typescript/i);
  expect(renderedLanguage).toBeInTheDocument();
});