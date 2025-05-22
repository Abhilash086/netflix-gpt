import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import useGPTSearchMovies from "../hooks/useGptSearchMovies";

const GptSearchBar = () => {
  const language = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = useGPTSearchMovies();

  const onSearchClick = ()=>{
    handleGptSearchClick(searchText)
  }

  return (
    <div className="w-full flex items-center justify-center">
      <form
        className="p-3 w-full sm:w-[60vw] flex items-center justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="w-full rounded-l-full bg-white text-sm p-2 sm:p-4"
          placeholder={lang[language].gptPlaceHolder}
        />
        <button
          onClick={onSearchClick}
          className="sm:p-[14px] bg-red-600 text-sm w-auto p-[10px] h-full sm:text-xl sm:w-[6vw] rounded-r-lg cursor-pointer"
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
