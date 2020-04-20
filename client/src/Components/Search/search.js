import React, { useState } from 'react';
import Movies from '../Movies/movies';
import './search.css'


function Search() {
  const [searching, setSearching] = useState();
  const [triggerSearch, setTriggerSearch] = useState(false);

  const submittingSearch = (e) => {
    e.preventDefault();
    setTriggerSearch(!triggerSearch);
    return; 
  }
  
return (
  <div className="Search">
    <form onSubmit = {submittingSearch}>
      <label>Write your movie title here: 
      <br/>
      <br/>
        <input className="search" type='text' onChange = {e=> setSearching(e.target.value)}></input>
      </label>
      <button className="searchButton" onClick={submittingSearch}>Search</button>
    </form>
    {triggerSearch && <Movies searching = {searching} triggerSearch = {triggerSearch}/>}
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
