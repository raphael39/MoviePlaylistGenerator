import React from 'react';
import ReactDom from 'react-dom';
import Logins from './../Logins';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'





 it ('renders without crashing', () => {
 const div = document.createElement('div');
 ReactDom.render(<button></button>, div);
})


it ('renders the button without crashing', () => {
 const {getByTestId} = render(<Logins/>)
 expect(getByTestId('Login')).toHaveTextContent('Sign in with Spotify')
}) 

/* it ('renders the LoggedIn <p> without crashing', () => {
 const {getByTestId} = render(<Logins/>)
 expect(getByTestId('Login')).toHaveTextContent('Spotify logged in ')
}) */