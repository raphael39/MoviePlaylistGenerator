import React, { useContext } from 'react';
import SpotifyContext from '../../SpotifyContext';
import { Alert } from 'react-alert';
import {createPlaylist, searchSongs, addSongs} from './SpotifyPlaylistFunctions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SpotifyButton.css';

function SpotifyButton({ title, songs}) {

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
    <div data-testid='spotifyButtonLoggedIn'>
      <button className="spotifyButton" style={{left: "60px"}} onClick={magicHappening}> Import playlist <br/>   on Spotify</button>
    </div>    
  )
  
}

export default SpotifyButton;




