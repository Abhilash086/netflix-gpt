import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
    useTrailerVideo(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    
    return (
        <div className="w-screen overflow-hidden">
            <div className="w-screen absolute aspect-video bg-black/50 z-10"></div>
            <iframe
                className=" absolute w-screen aspect-video -top-10"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
