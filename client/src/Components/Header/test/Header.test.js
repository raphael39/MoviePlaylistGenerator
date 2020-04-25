import React from 'react';
import ReactDom from 'react-dom';
import Header from './../Header';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'





it ('renders without crashing', () => {
 const div = document.createElement('div');
 ReactDom.render(<button></button>, div);
})


it ('renders the button without crashing', () => {
 const {getByTestId, container} = render(<Header/>)
 expect(container.firstChild.classList.contains('header')).toBe(true)
}) 