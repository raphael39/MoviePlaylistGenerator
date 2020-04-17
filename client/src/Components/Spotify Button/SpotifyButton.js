import React, { useState, useEffect } from 'react';
import SpotifyLogin from 'react-spotify-login';




function SpotifyButton({ title }) {

  const [token, setToken] = useState();
  const [userID, setUserID] = useState();

  const onSuccess = response => setToken(response.access_token);
  const onFailure = response => console.error(response);
// ---------------------------
  // useEffect (() => {
  //   askingdata(url, options).then(data=>setUserID(data))
  // }, [token])

  // // getting ID
  // const url = "	https://api.spotify.com/v1/me";

  // const options = {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // };
  
  
  // const askingdata = function (url, options){
  //   return fetch(url, options)
  //   .then( res => res.json() )
  //   .then( data => console.log(data) )};

// create playlist 
// POST https://api.spotify.com/v1/users/{user_id}/playlists

    // const id= "11102616416";
    const url = "https://api.spotify.com/v1/users/11102616416/playlists"

    async function createPlaylist(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        Accept: "application/json",
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    const option = {
      name: "create by my app :) ",
      public: false,
      description: "maramao"
    }

    if (token) {
      console.log(token, "done"); console.log(option , url); createPlaylist(url, option); 
    }
  
  // -------------- 
  return (
    <div>
        <SpotifyLogin clientId="a312d86273d043bdb89d0ea0112ac404"
    redirectUri="http://localhost:3000/"
    onSuccess={onSuccess}
    onFailure={onFailure}/>

    </div>

    // <div>
    //   <button> Import playlist on Spotify</button>
    // </div>    
  )
}

export default SpotifyButton;
