import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute pl-20 justify-end aspect-video flex flex-col gap-5 z-11'>
        <h1 className='max-md:text-xl text-6xl text-white/80 font-bold'>{title}</h1>
        <p className='text-sm text-white/80 font-semibold w-5/12'>{overview}</p>
        <div className='flex gap-4'>
            <button className='px-6 py-2 hover:bg-gray-400/40 hover:text-white/80 text-xl font-semibold cursor-pointer bg-[#bec4d0] border border-black rounded-sm' ><i className="fa-solid fa-play pr-2"></i>Play</button>
            <button className='px-6 py-2 hover:bg-gray-400/40 text-xl font-semibold cursor-pointer bg-[#bec4d0] border border-black rounded-sm'><i className="fa-solid fa-circle-info pr-2"></i>Info</button>
        </div>
    </div>
  )
}

export default VideoTitle