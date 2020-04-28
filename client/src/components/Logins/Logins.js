import React, {useState, useEffect, useContext} from 'react';
// import SpotifyLogin from 'react-spotify-login';
import SpotifyLogin from './react-spotify-login/src/SpotifyLogin';
import {spotifyClientID} from '../../api-keys';
import LoginYoutube from './LoginYoutube';
import './login.css';
import { addToken} from "../../store/actions/addToken";
import {connect} from "react-redux";
import SpotifyContext from "../../SpotifyContext";
import { getSpotifyUserId } from '../../apiCalls';


function Logins(props) {

  const spotifyUser = useContext(SpotifyContext);

  const [tokenSpotify, setTokenSpotify] = useState();
  const [spotifyUserId, setSpotifyUserId] = useState();

  if(tokenSpotify && !spotifyUserId) {
    getSpotifyUserId(tokenSpotify).then(user => setSpotifyUserId(user.id));
  };

  const onSuccessSpotify = response => setTokenSpotify(response.access_token);
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
      
      {!tokenSpotify && <SpotifyLogin clientId={spotifyClientID}
      redirectUri="http://localhost:3000/login"
      onSuccess={onSuccessSpotify}
      onFailure={onFailureSpotify}/>}

 

      {tokenSpotify && <div class="block"><button  className="loginButton"  onClick={loginAgain}>Logout</button></div>}
      {tokenSpotify && <p data-testid='test-paragraph'>Spotify logged in <span role='img' aria-label="rock">🤘</span></p>}

       
     
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



