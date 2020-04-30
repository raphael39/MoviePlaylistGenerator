import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk) )

  const hist = createBrowserHistory;

  

ReactDOM.render(
  <React.StrictMode>
<Router History={hist} >
    <Provider store={store}>
      <switch>
   <Route exact path="/"
  component={App} />
      </switch>
    
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


