import React, { useState, useEffect } from 'react';
import SpotifyButton from '../Spotify Button/SpotifyButton';
import Wikipedia from './wikipedia';
import './ListOfSongs.css';
import {connect} from "react-redux";

function ListOfSongs({ title }) {

  const [songs, setSongs] = useState();
  const [artists, setArtists] = useState();
  const [checkedSongs, setCheckedSongs] = useState([]);
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

  const timer = setTimeout(() => {}, 1000);

   

  return (
    <div className="listOfSong">
      <Wikipedia title={title} setSongs={setSongs} setArtists={setArtists} setLoaded={setLoaded} />
      <ul>
        <p style={{textAlign: "center", marginBottom: "25px"}}>{title} playlist: </p>
        {songs && songs.map(song=><li key={song.song} ><input type="checkbox" className="checkbox-round" onClick={() => handleCheckBox(song)} />{song.song} {song.artist && <span>by {song.artist}</span>}</li>)}
        {!songs && timer && <p className="noPlaylist">Sorry we don't have these songs yet!</p>}

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




//MockData, artist name left in uppercase to mimic tunefind API
// if (title === "Donnie Darko" && !songs) {
//   let fakeDb = [{song: "Lucid Memory", artist: "GERARD BAUER AND MIKE BAUER"}, {song: "Never Tear Us Apart", artist: "INXS"}, {song: "Head Over Heels", artist: "TEARS FOR FEARS"}, {song: "Under the Milky Way", artist: "THE CHURCH"}, {song: "Mad World", artist: "MICHAEL ANDREWS & GARY JULES"}, {song: "Time Travel" , artist: "MICHAEL ANDREWS"}, {song:"Voices Carry" , artist:"'TIL TUESDAY"}, {song:"Waltz in the 4th Dimension" , artist:"MICHAEL ANDREWS"}];
//   setSongs(fakeDb)
// }

// if (title === "Watchmen" && !songs) {
//   let fakeDb = [{song: "Unforgettable", artist: "NAT KING COLE"}, {song: "The Times They Are A-Changin", artist: "BOB DYLAN"}, {song: "99 Luftballons", artist: "NENA"}, {song: "The sound of silence", artist: "SIMON & GARFUNKEL"}, {song: "Ride of the Valkyries", artist: "BUDAPEST SYMPHONY ORCHESTRA"}, {song: "Me and Bobby McGee" , artist: "JANIS JOPLIN"}, {song:"I'm Your Boogie Man" , artist:"K.C. AND THE SUNSHINE BAND"}, {song:"Hallelujah" , artist:"LEONARD COHEN"}, {song:"Everybody Wants to Rule the World" , artist:"TEARS FOR FEARS"}, {song:"All Along the Watchtower" , artist:"JIMI HENDRIX"}, {song:"Desolation Row" , artist:"MY CHEMICAL ROMANCE"}, {song:"First We Take Manhattan" , artist:"LEONARD COHEN"}];
//   setSongs(fakeDb)
// }
//
