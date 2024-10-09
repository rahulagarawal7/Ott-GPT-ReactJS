import { useEffect } from "react";
import {
  API_OPTIONS,
  API_NOW_PLAYING_MOVIE,
  API_UPCOMING_MOVIE,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovie);
  useEffect(() => {
    !upcomingMovies && getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_UPCOMING_MOVIE, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };
};
