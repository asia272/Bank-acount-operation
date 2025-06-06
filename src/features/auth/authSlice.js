import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  role: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, role } = action.payload;
      state.user = user;
      state.role = role;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
