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
const generateAccountNumber = () => {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
};
const accountNumber = generateAccountNumber();
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      const {
        name,
        cnic,
        email,
        phone,
        dateOfBirth,
        password,
        accountType,
        branchId,
        role,
      } = action.payload;

      state.user = {
        name,
        cnic,
        email,
        phone,
        dateOfBirth,
        password,
        accountType,
        branchId,
        accountOpeningDate: new Date().toDateString(),
        accountNumber,
      };
      state.role = role || 'customer';
      state.isLoggedIn = true;

      saveToSession(state);
    },

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

export const { signup, login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
