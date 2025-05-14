import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return movies && (
    <div>
        <h1 className='text-xl md:text-3xl font-bold text-white py-4'>{title}</h1>
        <div className='flex gap-3 md:gap-6 overflow-x-scroll scrollbar-hide overflow-hidden'>
          {movies?.map((movie)=> <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
  )
}

export default MovieList