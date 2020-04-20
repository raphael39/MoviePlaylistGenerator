import React, { useState, useEffect, useContext } from 'react';
import SpotifyContext from '../../SpotifyContext';
import { Alert } from 'react-alert';
import {createPlaylist, searchSongs, addSongs} from './SpotifyPlaylistFunctions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function SpotifyButton({ title, songs}) {

  const spotifyUser = useContext(SpotifyContext);

  const notify = () => toast(title + " Playlist Imported Successfully");
  toast.configure()


  const doingGodWorks = async () => {
    const playlist = await createPlaylist(spotifyUser.spotifyUserId, title, spotifyUser.tokenSpotify )
    const songIds = await searchSongs(songs, spotifyUser.tokenSpotify);
    const addingSongToPlaylist = await addSongs (songIds, playlist.id, spotifyUser.tokenSpotify);
    console.log("playlist imported successfully");
    await notify();
  }

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
      <button onClick={doingGodWorks}> Import playlist on Spotify</button>
    </div>    
  )
}

export default SpotifyButton;




