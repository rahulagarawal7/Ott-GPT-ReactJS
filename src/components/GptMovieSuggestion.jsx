import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const movieList = useSelector((store) => store?.toggle.movieResults);
  const movieName = useSelector((store) => store?.toggle.movieName);

  if (!movieList) return null;

  return (
    <div className="p-4 my-4 mt-0 bg-black text-white w-full bg-opacity-90">
      <div>
        {movieName.map((movie, index) => (
          <MovieList movies={movieList[index]} key={movie} title={movie} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
