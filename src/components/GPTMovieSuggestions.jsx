import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store?.gpt);

  if (!movieNames) return null;
  console.log(movieResults[0].results[0]);

  return (
    <div className="w-full px-4 h-full flex flex-col items-start justify-start overflow-x-scroll">
      {movieNames.map((movie, idx) => (
        <MovieList
          key={movie}
          title={movie}
          movies={movieResults[idx].results}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
