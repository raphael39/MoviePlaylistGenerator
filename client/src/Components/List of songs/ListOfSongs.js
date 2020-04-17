import React, { useState } from 'react';

function ListOfSongs({ title }) {

  return (
    <div>
          <ul>
          <li>{title}</li>
          <li>song2</li>
          <li>song3</li>
          </ul>
          <button>Import playlist on Spotify</button>
          <br/>
          <button>Import playlist on Youtube</button>
    </div>    
  )
}

export default ListOfSongs;