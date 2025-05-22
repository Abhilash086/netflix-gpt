import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  return movies && (
    <div className='bg-black'>
      <div className='py-4 px-4 md:px-10 lg:-mt-40 z-20 relative overflow-hidden'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer