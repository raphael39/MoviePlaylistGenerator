import React, { useState, useEffect } from 'react';
// import SpotifyLogin from 'react-spotify-login';
import SpotifyLogin from './react-spotify-login/src/SpotifyLogin';
import {theMovieDb, spotifyClientID} from '../../api-keys';
import LoginYoutube from './LoginYoutube';
import ReactDom from 'react-dom';
import './login.css';



function Logins({token, setTokenSpotify}) {


  const onSuccessSpotify = response => setTokenSpotify(response.access_token);
  const onFailureSpotify = response => console.error(response);


  const loginAgain = () => {
    return setTokenSpotify();
  };

  return (

    <div>

      <h1 className="Headline">
        Get your favorite Movie soundtracks in one Playlist
      </h1>

    <div className="Logins">
      
      {!token && <SpotifyLogin clientId={spotifyClientID}



      redirectUri="http://localhost:3000/login"
      onSuccess={onSuccessSpotify}
      onFailure={onFailureSpotify}/>}

 

      {token && <div class="block"><button  className="loginButton"  onClick={loginAgain}>Logout</button></div>}
      {token && <p data-testid='test-paragraph'>Spotify logged in <span role='img' aria-label="rock">🤘</span></p>}

       
     
    </div>

    </div>
  );
}



export default Logins;
