import React from 'react'
import ReactDOM from 'react-dom'
import Search from "../search";
import {render, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it("renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(< Search />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it("renders dom correctly", ()=>{
  const {getByTestId} = render(<Search/>)
  expect(getByTestId('search')).toHaveTextContent('Search:');
})


it("renders dom correctly", ()=>{
  const {getByTestId} = render(<Search/>)
  expect(getByTestId('search')).toHaveTextContent('Search a movie up here');
})



