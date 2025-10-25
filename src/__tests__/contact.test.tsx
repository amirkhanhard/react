import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../pages/Contact';

test('renders the Contact component', () => {
  //  render component
  render(<Contact />);

  //  test it appears
  expect(screen.getByText('Contact Us')).toBeInTheDocument();
});
