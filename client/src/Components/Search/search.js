import React, { useState } from 'react';
import Movies from '../Movies/movies';
import './search.css'


function Search() {
  const [searching, setSearching] = useState();
  const [triggerSearch, setTriggerSearch] = useState(0);

  const submittingSearch = (e) => {
    e.preventDefault();
    setTriggerSearch(triggerSearch+1);
    return; 
  }
  
return (
  <div className="Search">
    <form onSubmit = {submittingSearch}>
      <label>Search: 
        <input className="search" type='text' onChange = {e=> setSearching(e.target.value)}></input>
      </label>
      {/* <button className="searchButton" onClick={submittingSearch}>Search</button> */}
      <img className="searchIcon" src="https://cdn0.iconfinder.com/data/icons/30-hardware-line-icons/64/Search-512.png" onClick={submittingSearch}></img>
    </form>
    {!searching && triggerSearch===0 && <p><span role='img' aria-label="up">👆</span> Search a movie up here <span role='img' aria-label="up">👆</span></p>}
    {triggerSearch!==0 && <Movies searching = {searching} triggerSearch = {triggerSearch}/>}
    </div>
  );

}

export default Search;


// return (
//   <div className="Search">
//   <form onSubmit = {submittingMovie}>
//     <label>Write your movie title here (try "the"): 
//     <br/>
//       <input type='text' onChange = {e=> setSearching(e.target.value)}></input>
//     </label>
//   </form>
//   <Movies searching={searching}></Movies>
//   </div>
// );
// }
