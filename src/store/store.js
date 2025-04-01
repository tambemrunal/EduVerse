import { configureStore } from "@reduxjs/toolkit";
import enrollReducer from "./EnrollSlice"; // Import the reducer
import authReducer from './authSlice'

const store = configureStore({
  reducer: {
    enrolledCourses: enrollReducer,
    auth: authReducer, // Register the reducer
  },
});

export default store;
