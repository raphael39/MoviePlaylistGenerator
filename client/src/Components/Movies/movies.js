import React from 'react';
import SingleMovie from '../Single movie/singleMovie';


function Movies({searching}) {

  if(!(searching)) { return <p><span role='img' aria-label="up">👆</span> Search a movie up here <span role='img' aria-label="up">👆</span></p>}
  

  return (
    <div>
      {movies && movies.map(movie => movie.includes(searching) ? <SingleMovie key={movie} movie = {movie}/> : "")}
      <p>No more movies, try another search</p>
    </div>
  )

}

const movies = ["the lord of the ring", "the great gatsby"] //to get from api

export default Movies;