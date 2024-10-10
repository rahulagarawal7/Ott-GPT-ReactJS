import { useRef } from "react";
import lang from "../utils/LangConstants";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/toggleSlice";
import { cohere } from "../utils/cohereai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const languageKey = useSelector((store) => store?.config.lang);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const generateText = async () => {
    const gptSearch = await cohere.invoke([
      [
        "system",
        "give me 5 movie list comma separated movie list give only 5 movie list based on user inputYou are an AI movie recommender. When the user gives a query like 'funny romantic movies', provide a list of 5 relevant movie names. Return the movie names as a comma-separated list do not give 'Here is a list of five Indian romantic movies' line . If the user query is unclear, ask for clarification. ",
      ],
      ["human", searchText.current.value],
    ]);
    console.log("searchText", searchText.current.value);
    console.log("AI MSG ---->", gptSearch.content);

    const searchMoviesList = gptSearch.content.split(",");

    const promiseArray = searchMoviesList.map((movie) =>
      searchMovieTMDB(movie)
    );

    const movieList = await Promise.all(promiseArray);

    dispatch(
      addGPTMovies({ movieResults: movieList, movieName: searchMoviesList })
    );
  };

  return (
    <div className="flex  w-full md:justify-center  pt-[40%] md:p-[10%] ">
      <div className=" bg-black flex flex-col md:flex-row md:w-[80%] w-full   md:justify-between">
        <input
          ref={searchText}
          className="p-4 my-2  md:w-[80%] mx-4  rounded-lg"
          type="text"
          placeholder={lang[languageKey]?.gptSearchPlaceHolder}
        />
        <button
          onClick={generateText}
          className="md:w-[20%] m-2 py-2 px-4 mx-4  bg-red-700   text-white rounded-lg "
        >
          {lang[languageKey]?.search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
