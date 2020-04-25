import React, { useState } from 'react';
import Movies from '../Movies/movies';
import './search.css';
import iconSearch from '../../images/Search-512.webp';


function Search() {
  const [searching, setSearching] = useState();
  const [triggerSearch, setTriggerSearch] = useState(0);

  const submittingSearch = (e) => {
    e.preventDefault();
    setTriggerSearch(triggerSearch+1);
    return; 
  }

return (
  <div data-testid="search" className="Search">
    <form onSubmit = {submittingSearch}>
      <label>Search: 
        <input className="search" type='text' onChange = {e=> setSearching(e.target.value)}></input>
      </label>
      {/* <button className="searchButton" onClick={submittingSearch}>Search</button> */}
      <img className="searchIcon" src={iconSearch} onClick={submittingSearch}></img>
    </form>
    {!searching && triggerSearch===0 && <p><span role='img' aria-label="up">👆</span> Search a movie up here <span role='img' aria-label="up">👆</span></p>}
    {triggerSearch!==0 && <Movies searching = {searching} triggerSearch = {triggerSearch}/>}
    </div>
  );

}

export default Search;



