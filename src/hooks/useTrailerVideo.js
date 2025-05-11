import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId)=>{
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
        const data = await res.json();

        const filterData = data.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer))
    };

    useEffect(() => {
        getMovieVideos();
    }, []);
}

export default useTrailerVideo;