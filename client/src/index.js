import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Logins from './components/Logins/Logins'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk) )

  const hist = createBrowserHistory;

  

ReactDOM.render(
  <React.StrictMode>
<Router History={hist} >
    <Provider store={store}>
    <Route exact path="/Login" 
  component={Logins}  />
   <Route exact path="/" 
  component={App} />
    
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


