import { useEffect } from "react";
import { API_OPTIONS, API_NOW_PLAYING_MOVIE } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovie } from "../utils/movieSlice";
export const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector((store) => store?.movies?.topRatedMovie);
  useEffect(() => {
    !topRatedMovie && getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_NOW_PLAYING_MOVIE, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  };
};
