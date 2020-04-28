import React, { useState, useEffect } from 'react';
// import SpotifyLogin from 'react-spotify-login';
import SpotifyLogin from './react-spotify-login/src/SpotifyLogin';
import {apis} from '../../api-keys';
import LoginYoutube from './LoginYoutube';
import './login.css';
import { addToken} from "../../store/actions/addToken";
import {connect} from "react-redux";


function Logins(props) {


  const onSuccessSpotify = response => props.addToken(response.access_token);
  const onFailureSpotify = response => console.error(2, response);


  const loginAgain = () => {
    props.addToken()
  };

  return (

    <div>

      <h1 className="Headline">
        Get your favorite Movie soundtracks in one Playlist
      </h1>

    <div className="Logins">
      
      {!props.token && <SpotifyLogin clientId={apis.spotify_api}



      redirectUri="http://localhost:3000/"
      onSuccess={onSuccessSpotify}
      onFailure={onFailureSpotify}/>}

 

      {props.token && <div class="block"><button  className="loginButton"  onClick={loginAgain}>Logout</button></div>}
      {props.token && <p data-testid='test-paragraph'>Spotify logged in <span role='img' aria-label="rock">🤘</span></p>}

       
     
    </div>

    </div>
  );
}


const mapStateToProps = state => {
  return {
    token: state.playlist.token,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addToken: (token => { dispatch(addToken(token)) })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logins);



