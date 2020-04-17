import React, {useState, useEffect} from 'react';
import SingleMovie from '../Single movie/singleMovie';
import {getMovieList} from '../../apiCalls';


function Movies({searching, triggerSearch}) {
  const [movies, setMovies] = useState ();
  const [title, setTitle] = useState();
 
  useEffect(() => {
    getMovieList(searching).then(data => setMovies (data))
  }, [triggerSearch])


  if(!(searching)) { return <p><span role='img' aria-label="up">👆</span> Search a movie up here <span role='img' aria-label="up">👆</span></p>}
  
  console.log("movies", movies)

  return (
    <div>
      {movies && movies.results.slice(0,10).map(movie => <SingleMovie key = {movie.id} title = {movie.title} posterPath = {movie.poster_path} date = {movie.release_date} />
      )}
      <p>No more movies, if your movie is not in the list try another search</p>
    </div>
  )

}


export default Movies;
