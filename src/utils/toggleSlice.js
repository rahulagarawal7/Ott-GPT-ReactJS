import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggle: false,
    movieResults: null,
    movieName: null,
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
  },
});

export const { toggleButton, addGPTMovies } = toggleSlice.actions;
export default toggleSlice.reducer;
