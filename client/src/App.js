import React, { useState, useEffect } from 'react';
import Search from './components/Search/search';
import SpotifyContext from './SpotifyContext';
import { getSpotifyUserId } from './apiCalls';
import './App.css';
import SpotifyLogin from "./components/Logins/react-spotify-login/src/SpotifyLogin";
import {spotifyClientID} from "./api-keys";
 

function App(props) {

  const [tokenSpotify, setTokenSpotify] = useState();
  const [spotifyUserId, setSpotifyUserId] = useState();

  if(tokenSpotify && !spotifyUserId) {
    getSpotifyUserId(tokenSpotify).then(user => setSpotifyUserId(user.id));
  };

  const onSuccessSpotify = response => {setTokenSpotify(response.access_token)};
  const onFailureSpotify = response => console.error(2, response);

  console.log('APP COMPONENT');
  console.log(props)
  const loginAgain = () => {
    return setTokenSpotify();
  };

  return (
    
    <div className="App">
      {/* <Header></Header> */}


      <div className="Logins">

        {!tokenSpotify && <SpotifyLogin clientId={spotifyClientID}
                                        redirectUri="http://localhost:3000/"
                                        onSuccess={onSuccessSpotify}
                                        onFailure={onFailureSpotify}/>}

        {tokenSpotify && <div ><button  className="logoutButton"  onClick={loginAgain}>Logout 🚫</button></div>}
        {tokenSpotify &&  <SpotifyContext.Provider value={{ tokenSpotify: tokenSpotify, spotifyUserId: spotifyUserId }}> <Search></Search> </SpotifyContext.Provider>}
        {/* <Header></Header> */}
      </div>
    </div>
    
  );
}





export default App;


