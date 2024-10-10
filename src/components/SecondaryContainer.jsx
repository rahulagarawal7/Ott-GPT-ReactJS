import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="bg-black ">
      <div className="md:-mt-52 -mt-12 relative z-20 md:pl-12 pl-4 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <div>
          <MovieList title={"Upcoming"} movies={movies.upcomingMovie} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
