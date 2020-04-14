import React, { useState } from 'react';

function SingleMovie({ movie }) {

  const [showPlaylist, setShowPlaylist] = useState(false);
  const showingButtonText = showPlaylist? "Hide Playlist" : "Show playlist";

  const openPlaylist = () => {
    return setShowPlaylist(!showPlaylist)
  }

  return (
    <div>
      <p>{movie}</p>
      <button onClick={openPlaylist}>{showingButtonText}</button>
      {(showPlaylist) && 
        <div>
          <ul>
          <li>song1</li>
          <li>song2</li>
          <li>song3</li>
          </ul>
          <button>Import playlist on Spotify</button>
          <br/>
          <button>Import playlist on Youtube</button>
        </div>
    }
  </div>    
  )
}

export default SingleMovie;