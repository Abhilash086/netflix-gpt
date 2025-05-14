import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId, volumeOn }) => {
    useTrailerVideo(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    
    return (
        <div className="h-full top-0 relative sm:aspect-video sm:absolute w-screen overflow-hidden">
            <div className={`${volumeOn ? "hidden" : "block"} w-screen sm:top-0 h-full absolute sm:aspect-video bg-black/50 z-10`}></div>
            <iframe
                className="scale-110 scale-y-125 lg:top-0 h-full absolute w-screen"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=${volumeOn ? 0 : 1}&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
