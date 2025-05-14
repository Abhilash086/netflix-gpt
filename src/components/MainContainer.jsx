import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useState } from 'react';

const MainContainer = () => {
  const [volumeOn, setVolumeOn] = useState(false);

  const movies = useSelector(store=> store.movies?.nowPlayingMovies);
  if(!movies) return;

  const mainMovie = movies[0];

  const {original_title, overview} = mainMovie;

  return (
    <div className='bg-black relative h-[45vh] w-screen pt-2 sm:pt-12 sm:h-[60%] md:h-full overflow-hidden'>
      <VideoTitle title={original_title} overview={overview} volumeOn={volumeOn} setVolumeOn={setVolumeOn}/>
      <VideoBackground movieId={mainMovie.id} volumeOn={volumeOn}/>
    </div>
  )
}

export default MainContainer