import { useDispatch, useSelector } from "react-redux";
import useMovieTrailerVideo from "../hooks/useMovieTrailerVideo";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { addMovieTrailerVideo, removeMovieTrailerVideo } from "../utils/moviesSlice";
import Header from "./Header";

const MovieTrailer = () => {
  const { movieId } = useParams();
  useMovieTrailerVideo(movieId);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const movie = useSelector((store) => store?.movies?.movieTrailerVideo);

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);

    const handlePopState = () => {
      dispatch(removeMovieTrailerVideo());
      navigate("/browse")
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      dispatch(removeMovieTrailerVideo());
      navigate("/browse");
    };
  }, [navigate, dispatch]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-screen overflow-hidden">
        <iframe
          className="w-full absolute h-full"
          src={`https://www.youtube.com/embed/${movie?.key}?showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${movie?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieTrailer;
