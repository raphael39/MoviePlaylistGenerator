import React from 'react'
import ReactDOM from 'react-dom'
import SingleMovie from '../singleMovie'
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

it("renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(< SingleMovie />, div);
  ReactDOM.unmountComponentAtNode(div);
})



