import {render, screen} from '@testing-library/react'
import Contact from '../Contact';

test('contact component jest-dom', () => {
  render(<Contact />);

  expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
  expect(screen.getByText('Contact Us')).toBeVisible();
})