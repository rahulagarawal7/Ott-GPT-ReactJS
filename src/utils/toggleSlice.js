import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggle: false,
    movieResults: null,
    movieName: null,
    loading: false,
  },
  reducers: {
    toggleButton: (state, action) => {
      state.toggle = !state.toggle;
    },
    addGPTMovies: (state, action) => {
      const { movieResults, movieName } = action.payload;
      state.movieResults = movieResults;
      state.movieName = movieName;
    },
    isLoading: (state, action) => {
      state.loading = !state.loading;
    },
  },
});

export const { toggleButton, addGPTMovies, isLoading } = toggleSlice.actions;
export default toggleSlice.reducer;
