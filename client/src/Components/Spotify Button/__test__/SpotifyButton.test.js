import React from 'react';
import ReactDom from 'react-dom';
import SpotifyButton from './../SpotifyButton';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<button></button>, div);
});

// Test if user is not logged in
it('renders the button without crashing', () => {
  const { getByTestId } = render(<SpotifyButton />);
  expect(getByTestId('SpotifyButton')).toHaveTextContent(
    'Login to your Spotify account.'
  );
}); 

// Test if user is logged in
/* it('renders the button without crashing', () => {
  const { getByTestId } = render(<SpotifyButton />);
  expect(getByTestId('SpotifyButtonLoggedIn')).toHaveTextContent(
    'Import playlist'
  );
}) */;
