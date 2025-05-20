import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const language = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);

  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  const handleGptSearchClick = async () => {
    if (loading) return; // prevent spam clicking

    setLoading(true);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      try {
        const gptQuery =
          "Act as a movie Recommendation system and suggest some movies for the query " +
          searchText.current.value +
          ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Results: Sholay,KGF,Golmal,Koi mil gaya";

        const gptResults = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [{ role: "user", content: gptQuery }],
        });

        console.log(gptResults.choices);
      } catch (err) {
        console.error("GPT Error:", err);
      } finally {
        setLoading(false);
      }
    }, 400); // wait 400ms before sending request
  };

  return (
    <div className="absolute top-[12%] w-full">
      <form
        className="p-3 w-[60%] mx-auto flex items-center justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="w-full rounded-l-full bg-white p-4"
          placeholder={lang[language].gptPlaceHolder}
        />
        <button
          onClick={handleGptSearchClick}
          className="p-[14px] h-full bg-red-600 text-xl w-[6vw] rounded-r-lg cursor-pointer"
        >
          {loading ? "Searching..." : lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
