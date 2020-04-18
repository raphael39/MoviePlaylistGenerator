import React, { useState, useEffect } from 'react';
import Logins from './Components/Logins/Logins';
import Search from './Components/Search/search';
import Api from './Components/Api/api';
import BackEnd from './Components/BackEnd/BackEnd';
import SpotifyContext from './SpotifyContext'
import {getSpotifyUserId} from './apiCalls'

import './App.css';

function App() {
  const [tokenSpotify, setTokenSpotify] = useState();
  const [spotifyUserId, setSpotifyUserId] = useState();
 
  if(tokenSpotify && !spotifyUserId) {
    getSpotifyUserId(tokenSpotify).then(user => setSpotifyUserId(user.id));
  };

  console.log("APP COMPONENT")

  return (

    <div className="App">
      <Logins token={tokenSpotify} setTokenSpotify={setTokenSpotify}></Logins>
      <h1>Find your favorite ost and import them on Youtube or Spotify</h1>
      <SpotifyContext.Provider value={{tokenSpotify: tokenSpotify, spotifyUserId: spotifyUserId}} >
        <Search></Search>
        <Api></Api>
        <BackEnd></BackEnd>
      </SpotifyContext.Provider>
    </div>
  );
}

export default App;
