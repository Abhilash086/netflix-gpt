import { useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesList } from "../utils/gptSlice";

const useGPTSearchMovies = ()=>{
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie)=>{
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
        const data = await res.json()
        return data
    }

    const handleGptSearchClick = async (searchText) => {
        const gptQuery =
            "Act as a movie Recommendation system and suggest some movies for the query " +
            searchText.current.value +
            ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Results: Sholay,KGF,Golmal,Koi mil gaya";

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "user", content: gptQuery}
            ]
        });

        console.log(response.choices[0].message.content)
        const gptMovies = response.choices[0].message.content.split(",");

        const promiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults)

        dispatch(addGptMoviesList({movieNames: gptMovies, movieResults: tmdbResults}))
    };

    return handleGptSearchClick;
}

export default useGPTSearchMovies;