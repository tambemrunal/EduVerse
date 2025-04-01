import { createSlice } from "@reduxjs/toolkit";

const enrollSlice = createSlice({
  name: "enrolledCourses",
  initialState: [], // Initially, no courses are enrolled
  reducers: {
    enrollCourse: (state, action) => {
      // Prevent duplicate enrollments
      const isAlreadyEnrolled = state.some(course => course.id === action.payload.id);
      if (!isAlreadyEnrolled) {
        state.push(action.payload);
      }
    },
    unenrollCourse: (state, action) => {
      // Remove the course with the given ID
      return state.filter(course => course.id !== action.payload);
    }
  },
});

export const { enrollCourse ,unenrollCourse  } = enrollSlice.actions;
export default enrollSlice.reducer;
