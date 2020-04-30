import React, { useState, useEffect } from 'react';
import SpotifyButton from '../Spotify Button/SpotifyButton';
import Wikipedia from './wikipedia';
import './ListOfSongs.css';
import {connect} from "react-redux";
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

function ListOfSongs({ title }) {

  const [songs, setSongs] = useState();
  const [artists, setArtists] = useState();
  const [checkedSongs, setCheckedSongs] = useState([]);
  const [display, setDisplay] = useState('none');
  const [loaded, setLoaded] = useState('')

  if (songs && typeof(songs[0])!=="object") {
    const dbSongs = [];
    if(artists) {
      for(let i=0;i<songs.length;i++){
        dbSongs[i] = {song: songs[i], artist: artists[i]}
      }
    } else {
      for(let i=0;i<songs.length;i++){
        dbSongs[i] = {song: songs[i], artist: undefined}
      }
    }
    setSongs(dbSongs);
  }; 

  

  function handleCheckBox (song) {
    let newArr = [...checkedSongs];
    const foundIndex = newArr.indexOf(song);
    if (foundIndex < 0) {
      newArr.push(song);
    }
    else {
      newArr.splice(foundIndex, 1);
    }
    setCheckedSongs(newArr);
    
  }

 


  return (
    <div className="listOfSong">
      <Wikipedia title={title} setSongs={setSongs} setArtists={setArtists} setLoaded={setLoaded} />
      <ul>
        <p style={{textAlign: "center", marginBottom: "25px"}}>{title} playlist: </p>
        {songs && songs.map(song=><li key={song.song} ><input type="checkbox" className="checkbox-round" onClick={() => handleCheckBox(song)} />{song.song} {song.artist && <span>by {song.artist}</span>}</li>)}

        <Box display={display}> <p className="noPlaylist">Sorry we don't have these songs yet!</p> </Box>

        {/* {!songs && <p className="noPlaylist">No playlist yet! We are working on it, stay tuned!</p>} */}
      </ul>
      <SpotifyButton title={title} songs={songs} checkedSongs={checkedSongs}/>
    </div>
  )
}




const mapStateToProps = state => {
  console.log(state)
  return {
    movies: state.playlist.movies
  }
}
export default connect(mapStateToProps)(ListOfSongs);



