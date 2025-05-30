import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    firstName: '',
    lastName:'',
    Address:"",
    password: '',
    phone:''
  },
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    submitSignup: (state, action) => {
      state.formData = action.payload;
      console.log("Signup Data:", action.payload);
    },
  },
});

export const { submitSignup } = signupSlice.actions;
export default signupSlice.reducer;
