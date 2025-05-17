import { useDispatch, useSelector } from "react-redux";
import useMovieTrailerVideo from "../hooks/useMovieTrailerVideo";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { addMovieTrailerVideo } from "../utils/moviesSlice";

const MovieTrailer = () => {
  const { movieId } = useParams();
  useMovieTrailerVideo(movieId);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const movie = useSelector((store) => store?.movies?.movieTrailerVideo);
  console.log(movie);

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);

    const handlePopState = () => {
      dispatch(addMovieTrailerVideo(null));
      navigate("/")
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      dispatch(addMovieTrailerVideo(null));
    };
  }, [navigate, dispatch]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-screen overflow-hidden">
        <iframe
          className="w-full absolute h-full"
          src={`https://www.youtube.com/embed/${movie?.key}?showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${movie?.key}`}
          title="YouTube video player"
          allow="accelerometer; controls; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieTrailer;
