import { useRef } from "react";
import lang from "../utils/LangConstants";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/toggleSlice";
import { ChatCohere } from "@langchain/cohere";

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
    /// API call
    const llm = new ChatCohere({
      apiKey: "MNJk1rkyZmUVnfpEu77KPXgz4bk7XcqMXyNlGJWF",
      model: "command-r-plus",
      temperature: 0,
    });
    const aiMsg = await llm.invoke([
      [
        "system",
        "You are a helpful assistant that translates English to Hindi. Translate the user sentence.",
      ],
      ["human", "I love programming."],
    ]);
    console.log("AI MSG ---->", aiMsg.content);
    ////
    const searchMoviesList = [
      "Chupke Chupke",
      "Gol Maal",
      "Pati Patni Aur Woh",
      "Angoor",
      "Chhoti Si Baat",
    ];
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
