import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice"; // Corrected import statement

const appStore = configureStore({
  reducer: {
    user: userReducer, // Ensure this matches the export from userSlice
  },
});

export default appStore;
