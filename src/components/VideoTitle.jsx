
const VideoTitle = ({ title, overview, setVolumeOn, volumeOn }) => {

  const handleVolume = ()=>{
    setVolumeOn(!volumeOn);
  }


  return (
    <div className="sm:flex absolute flex top-0 items-end h-full z-12">
      <div className="pl-[6vw] w-screen sm:pl-[5vw] items-end pb-8 sm:pb-16 lg:pb-56 justify-between flex z-11">
        <div className="flex flex-col gap-3 sm:gap-5">
          <h1 className={`opacity-85 sm:opacity-100 text-2xl ${volumeOn ? "hidden":"block"} sm:text-3xl lg:text-[6vmin] text-white/80 font-bold`}>
            {title}
          </h1>
          <p className={`opacity-65 sm:opacity-100 text-[12px] ${volumeOn ? "hidden":"block"} sm:text-sm sm:w-10/12 text-white/80 font-normal w-10/12 md:w-5/12`}>
            {overview.slice(0, 100)+"..."}
          </p>
          <div className="flex gap-4">
            <button className="px-[10px] py-[5px] md:px-6 md:py-2 text-sm hover:bg-gray-400/40 hover:text-white/80 md:text-xl font-semibold cursor-pointer bg-[#bec4d0] border border-black rounded-sm">
              <i className="fa-solid fa-play pr-2"></i>Play
            </button>
            <button className="px-[10px] py-[5px] md:px-6 md:py-2 text-sm hover:bg-gray-400/40 md:text-xl font-semibold cursor-pointer bg-[#bec4d0] border border-black rounded-sm">
              <i className="fa-solid fa-circle-info pr-2"></i>Info
            </button>
          </div>
        </div>
        <div className="pr-10 sm:pr-22">
          <button 
            onClick={handleVolume}
            className="bg-gray-400 hover:bg-transparent hover:border hover:text-white rounded-full w-8 h-8 cursor-pointer">
              {volumeOn ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
