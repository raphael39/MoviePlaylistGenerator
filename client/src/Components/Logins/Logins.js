import React, { useState, useEffect } from 'react';
// import SpotifyLogin from 'react-spotify-login';
import SpotifyLogin from './react-spotify-login/src/SpotifyLogin';
import {spotifyClientID} from '../../api-keys';
import LoginYoutube from './LoginYoutube';
import './logins.css';



function Logins({token, setTokenSpotify}) {

  const onSuccessSpotify = response => setTokenSpotify(response.access_token);
  const onFailureSpotify = response => console.error(response);


  const loginAgain = () => {
    return setTokenSpotify();
  };

  return (
    <div className="Logins">
      {!token && <SpotifyLogin clientId={spotifyClientID}
      redirectUri="http://localhost:3000/"
      onSuccess={onSuccessSpotify}
      onFailure={onFailureSpotify}/>}

      {token && <p>Spotify logged in SuccessFully.<span role='img' aria-label="rock">🤘</span></p>}
      {token && <button className="loginButton" onClick={loginAgain}>"Sign in Again"</button>}
    </div>
  );
}



export default Logins;