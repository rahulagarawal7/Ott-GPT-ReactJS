import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import toggleSlice from "./toggleSlice";
import configSlice from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    toggle: toggleSlice,
    config: configSlice,
  },
});
export default appStore;
