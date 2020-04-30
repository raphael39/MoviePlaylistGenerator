import React, { useState } from 'react';
import Movies from '../Movies/movies';
import './search.css';
import iconSearch from '../../images/Search-512.webp';
import {connect} from 'react-redux';
import { addSearching } from "../../store/actions/addSearch";

function Search(props) {

  const [trigger, setTrigger] = useState(0)

  const submittingSearch = (e) => {
    e.preventDefault();
    setTrigger(1)
  }

  console.log(props)

return (
  <div data-testid="search" className="Search">
    <form >
      <label>Search: 
        <input className="search" placeholder='look up a movie' type='text' onChange = {e=> props.addSearching(e.target.value)}></input>
      </label>
      {/* <button className="searchButton" onClick={submittingSearch}>Search</button> */}
      <img className="searchIcon" src={iconSearch} onChange={submittingSearch}></img>
    </form>
    {trigger === 0 && !props.searching}
    {props.searching.length > 0 && <Movies searching={props.searching}/>}
    

    </div>
  );

}

const mapStateToProps = state => {
  return {
    searching: state.playlist.searching,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addSearching: (item => { dispatch(addSearching(item)) }),
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Search);



