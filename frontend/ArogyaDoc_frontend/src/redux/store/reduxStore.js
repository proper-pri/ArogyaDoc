// reduxStore.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../auth/userAuthSlice"; // Import your user slice

// Create the Redux store
const store = configureStore({
  reducer: {
    user: userReducer, // Add your user reducer here
  },
});

export default store;
