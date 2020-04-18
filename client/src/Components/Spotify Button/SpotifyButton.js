
import React, { useState, useEffect, useContext } from 'react';
import SpotifyContext from '../../SpotifyContext';
import { Alert } from 'react-alert';
import {createPlaylist, searchSongs} from './SpotifyPlaylistFunctions';



function SpotifyButton({ title, songs}) {

  const spotifyUser = useContext(SpotifyContext);

  const [playlist, setPlaylist] = useState(null);
  const [idTracks, setIdTracks] = useState(null);

  const setPlaylistToState = async () => {
    const playlist = await createPlaylist(spotifyUser.spotifyUserId, title, spotifyUser.tokenSpotify )
    setPlaylist(playlist)
  }

  const setIdTracksToState = async () => {
    const ids = await searchSongs(songs, spotifyUser.tokenSpotify)
    setIdTracks(ids)
  }

  const logPlaylist = () => console.log("playlist", playlist);
  const logIds = () => console.log("ids", idTracks);

  //console.log(songs) //array of obj [ {song: "Lucid Memory", artist: "GERARD BAUER AND MIKE BAUER"}, etc]
  if(spotifyUser.tokenSpotify===undefined) {
    return(
      <div>
      <button onClick={() => 
        {alert('Login Required!')}
      }> LogIn to your Spotify account.</button>
    </div>  
    )
  };

  return (
    <div>
      <button onClick={setIdTracksToState}> Import playlist on Spotify</button>
      {/* {playlist && JSON.stringify(playlist)}
      {idTracks && idTracks.map(id => <p>{id}</p>)} */}
      <button onClick={logPlaylist}>Log Playlist state</button>
      <button onClick={logIds}>Log Ids state</button>

    </div>    
  )
}

export default SpotifyButton;




