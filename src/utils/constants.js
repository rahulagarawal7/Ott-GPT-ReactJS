export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_APP_TMDB_API_KEY,
  },
};

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg";

export const API_NOW_PLAYING_MOVIE =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/";

export const API_POPULAR_MOVIE =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const API_UPCOMING_MOVIE =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const API_TOP_RATED_MOVIE =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", language: "English" },
  { identifier: "hindi", language: "Hindi" },
  { identifier: "spanish", language: "Spanish" },
];
export const OPENAI_KEY = import.meta.env.VITE_APP_OPENAI_KEY;
