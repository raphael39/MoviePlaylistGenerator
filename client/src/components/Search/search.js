import React, { useState } from 'react';
import Movies from '../Movies/movies';
import './search.css';
import iconSearch from '../../images/Search-512.webp';
import {connect} from 'react-redux';
import { addSearching } from "../../store/actions/addSearch";
import { addTriggerSearch } from "../../store/actions/addTrigger";

function Search(props) {

  const [trigger, setTrigger] = useState(0)

  const submittingSearch = (e) => {
    e.preventDefault();
    setTrigger(1)
  }

return (
  <div data-testid="search" className="Search">
    <form onSubmit = {submittingSearch}>
      <label>Search: 
        <input className="search" type='text' onChange = {e=> props.addSearching(e.target.value)}></input>
      </label>
      {/* <button className="searchButton" onClick={submittingSearch}>Search</button> */}
      <img className="searchIcon" src={iconSearch} onClick={submittingSearch}></img>
    </form>
    {trigger === 0 && !props.searching  && <p><span role='img' aria-label="up">👆</span> Search a movie up here <span role='img' aria-label="up">👆</span></p>}
    {trigger > 0 && props.searching.length > 0 && <Movies searching={props.searching}/>}
    </div>
  );

}

const mapStateToProps = state => {
  return {
    searching: state.playlist.searching,
    trigger: state.playlist.triggerSearch
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addSearching: (item => { dispatch(addSearching(item)) }),
    addTriggerSearch: (item => { dispatch(addTriggerSearch(item)) })
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Search);



