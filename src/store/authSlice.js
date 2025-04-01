import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('eduverseUser', JSON.stringify(action.payload)); // Persist session
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('eduverseUser'); // Clear session
    },
    checkAuth: (state) => {
      const storedUser = JSON.parse(localStorage.getItem('eduverseUser'));
      if (storedUser) {
        state.isAuthenticated = true;
        state.user = storedUser;
      }
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
