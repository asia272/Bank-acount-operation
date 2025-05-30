import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../features/card/cardSlice';
import signupReducer from '../features/signup/signupSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    signup: signupReducer
  }
});
