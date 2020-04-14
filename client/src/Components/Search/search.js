import React, { useState } from 'react';
import Movies from '../Movies/movies';


function Search() {
  const [searching, setSearching] = useState();

  const submittingMovie = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className="Search">
    <form onSubmit = {submittingMovie}>
      <label>Write your movie title here (try "the"): 
      <br/>
        <input type='text' onChange = {e=> setSearching(e.target.value)}></input>
      </label>
    </form>
    <Movies searching={searching}></Movies>
    </div>
  );
}

export default Search;