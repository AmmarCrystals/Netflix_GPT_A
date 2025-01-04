import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../Utils/userSlice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default appStore;
