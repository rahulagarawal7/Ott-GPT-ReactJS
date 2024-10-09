import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div className="fixed h-full w-full  -z-10">
        <img className="object-cover w-full  h-full" src={BG_IMG} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
