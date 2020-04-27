import React, {useState, useEffect} from 'react';
import SingleMovie from '../Single movie/singleMovie';
import {getMovieList} from '../../apiCalls';
import './movies.css'
import { connect } from 'react-redux'
import { addMovies } from '../../store/actions/addMovies'

function Movies(props ) {
  const {items, movies, triggerSearch, searching} = props

  console.log('Props: ', props)


 
  useEffect(() => {
    getMovieList(searching).then(data => props.addMovies(data))
  }, [triggerSearch])


  return (
    <div>
        <div data-teestid="movies" className='movies'>
          {movies && movies.results.slice(0,10).map(movie => <SingleMovie key = {movie.id} title = {movie.title}  posterPath = {movie.poster_path} release_date = {movie.release_date} />
          )}
        </div>
      <p className="no-movies">No more movies, if your movie is not in the list try another search</p>
    </div>
  )

}


const mapStateToProps = state => {
  return {
    items: state.playlist.items,
    movie: state.playlist.movie
  }
}

const mapDispatchToProps = dispatch => {
 return {
   addMovies: (movies) => { dispatch(addMovies(movies)) },
 }
}



export default connect(mapStateToProps, mapDispatchToProps)(Movies);
