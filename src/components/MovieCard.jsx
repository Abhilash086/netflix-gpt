import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({movie}) => {

  return (
    <div>
      <div className='w-28 md:w-52 cursor-pointer hover:scale-110 ease-in transition-all overflow-hidden'>
        <img className='w-full object-cover' src={POSTER_URL+movie.poster_path} alt="Movie Poster" />
      </div>
    </div>
  )
}

export default MovieCard