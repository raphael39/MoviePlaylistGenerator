import React, { useState, useEffect } from 'react';
import Logins from './components/Logins/Logins';
import Search from './components/Search/search';
import SpotifyContext from './SpotifyContext';
import {getSpotifyUserId} from './apiCalls';
import Header from './components/Header/Header';

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
      <Header></Header>
      <Logins token={tokenSpotify} setTokenSpotify={setTokenSpotify}></Logins>
      <SpotifyContext.Provider value={{tokenSpotify: tokenSpotify, spotifyUserId: spotifyUserId}} >
        <Search></Search>
      </SpotifyContext.Provider>
    </div>
  );
}

export default App;
