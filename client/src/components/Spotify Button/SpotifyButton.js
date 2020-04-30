import React, { useContext } from 'react';
import SpotifyContext from '../../SpotifyContext';
import { Alert } from 'react-alert';
import {createPlaylist, searchSongs, addSongs} from './SpotifyPlaylistFunctions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SpotifyButton.css';

function SpotifyButton({ title, songs, checkedSongs}) {

  const spotifyUser = useContext(SpotifyContext);

  const notify = () => toast(title + " Playlist Imported Successfully");
  toast.configure();

  const magicHappening = async () => {
    const playlist = await createPlaylist(spotifyUser.spotifyUserId, title, spotifyUser.tokenSpotify )
    const songIds = await searchSongs(songs, spotifyUser.tokenSpotify);
    const addingSongToPlaylist = await addSongs (songIds, playlist.id, spotifyUser.tokenSpotify);
    console.log("playlist imported successfully");
    await notify();
  }
  const magicHappening2 = async () => {
    const playlist = await createPlaylist(spotifyUser.spotifyUserId, title, spotifyUser.tokenSpotify )
    const songIds = await searchSongs(checkedSongs, spotifyUser.tokenSpotify);
    const addingSongToPlaylist = await addSongs (songIds, playlist.id, spotifyUser.tokenSpotify);
    console.log("playlist imported successfully");
    await notify();
  }

  /* if(spotifyUser.tokenSpotify==undefined) {
    return(
      <div data-testid='spotifyButton'>
      <button className="spotifyButton" style={{left: "30px"}} onClick={() => 
        {alert('Login Required!')}
      }> LogIn to your Spotify <br/> account.</button>
    </div>  
    )
  }; */

  

  return (
    <div className="buttonBox" data-testid='spotifyButtonLoggedIn'>
      <button className="spotifyButton"  onClick={magicHappening}>  All songs <br/>in a <br/>playlist</button>
      <button className="spotifyButton"  onClick={magicHappening2}>  Selected songs <br/>in a playlist</button>
    </div>    
  )
  
}

export default SpotifyButton;




