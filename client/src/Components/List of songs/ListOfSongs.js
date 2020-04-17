import React, { useState, useEffect } from 'react';
import SpotifyButton from '../Spotify Button/SpotifyButton'

function ListOfSongs({ title }) {

  return (
    <div>
      <ul>
      <li>{title}</li>
      <li>song2</li>
      <li>song3</li>
      </ul>
      <SpotifyButton/>
      <br/>
      <button >Import playlist on Youtube</button>
    </div>    
  )
}

export default ListOfSongs;