import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  username: '',
  details: {}
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
      state.username = action.payload.username;
      state.details = action.payload.details;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  
    logout: (state) => {
      state.items = null;
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