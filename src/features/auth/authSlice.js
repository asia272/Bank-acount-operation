import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  role: null,
  isLoggedIn: false,
};


const saveToSession = (state) => {
  sessionStorage.setItem('auth', JSON.stringify({
    user: state.user,
    role: state.role,
    isLoggedIn: state.isLoggedIn,
  }));
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

      saveToSession(state);
    },
    updateProfile: (state, action) => {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload,
        };

        saveToSession(state);
      }
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isLoggedIn = false;

      sessionStorage.removeItem('auth');
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
