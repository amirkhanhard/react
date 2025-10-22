import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from '../Hello';

test('renders Hello component with name', () => {
  render(<Hello name="Amir" />);
  
  // Assert it renders correctly
  expect(screen.getByTestId('greeting')).toHaveTextContent('Hello, Amir!');
  expect(screen.getByText('Hello, Amir!')).toBeInTheDocument();
});
