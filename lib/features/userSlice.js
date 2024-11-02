import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: null,
  isLoading: false,
  error: null,
  username: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.details = action.payload.details;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  
    logout: (state) => {
      state.details = null;
      state.username = "";
      state.password = "";
    },
  },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout 
} = userSlice.actions;

export default userSlice.reducer;