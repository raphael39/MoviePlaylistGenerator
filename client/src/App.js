import React from 'react';
import Logins from './Components/Logins/Logins';
import Search from './Components/Search/search';
import Api from './Components/Api/api';
import BackEnd from './Components/BackEnd/BackEnd';

import './App.css';

function App() {
  return (
    <div className="App">
      <Logins></Logins>
      <h1>Find your favorite ost and import them on Youtube or Spotify</h1>
      <Search></Search>
      <Api></Api>
      <BackEnd></BackEnd>
    </div>
  );
}

export default App;
