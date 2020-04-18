import React, { useState, useEffect } from 'react';
import SpotifyButton from '../Spotify Button/SpotifyButton'

function ListOfSongs({ title }) {
  const [songs, setSongs] = useState();

  //MockData, artist name left in uppercase to mimic tunefind db
  if (title === "Donnie Darko" && !songs) {
    let fakeDb = [{song: "Lucid Memory", artist: "GERARD BAUER AND MIKE BAUER"}, {song: "Never Tear Us Apart", artist: "INXS"}, {song: "Head Over Heels", artist: "TEARS FOR FEARS"}, {song: "Under the Milky Way", artist: "THE CHURCH"}, {song: "Mad World", artist: "MICHAEL ANDREWS & GARY JULES"}, {song: "Time Travel" , artist: "MICHAEL ANDREWS"}, {song:"Voices Carry" , artist:"'TIL TUESDAY"}, {song:"Waltz in the 4th Dimension" , artist:"MICHAEL ANDREWS"}];
    setSongs(fakeDb)
  }

  if (title === "Watchmen" && !songs) {
    let fakeDb = [{song: "Unforgettable", artist: "NAT KING COLE"}, {song: "The Times They Are A-Changin", artist: "BOB DYLAN"}, {song: "99 Luftballons", artist: "NENA"}, {song: "The sound of silence", artist: "SIMON & GARFUNKEL"}, {song: "Ride of the Valkyries", artist: "BUDAPEST SYMPHONY ORCHESTRA"}, {song: "Me and Bobby McGee" , artist: "JANIS JOPLIN"}, {song:"I'm Your Boogie Man" , artist:"K.C. AND THE SUNSHINE BAND"}, {song:"Hallelujah" , artist:"LEONARD COHEN"}, {song:"Everybody Wants to Rule the World" , artist:"TEARS FOR FEARS"}, {song:"All Along the Watchtower" , artist:"JIMI HENDRIX"}, {song:"Desolation Row" , artist:"MY CHEMICAL ROMANCE"}, {song:"First We Take Manhattan" , artist:"LEONARD COHEN"}];
    setSongs(fakeDb)
  }


  return (
    <div>
      <ul>
      <p>{title} playlist: </p>
      {songs && songs.map(song=><li key={song.song}>{song.song} by {song.artist.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</li>)}
      {!songs && <p>No playlist yet! We are working on it, stay tuned!</p>}
      </ul>
      <SpotifyButton title={title} songs={songs}/>
      <br/>
      <button >Import playlist on Youtube</button>
    </div>    
  )
}




export default ListOfSongs;