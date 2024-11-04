import { createSlice } from '@reduxjs/toolkit';

const linkedInSlice = createSlice({
  name: 'linkedIn',
  initialState: {
    profileData: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchLinkedInDataRequest: (state, action) => {
      state.loading = true;
    },
    fetchLinkedInDataSuccess: (state, action) => {
      state.loading = false;
      state.profileData = action.payload;
    },
    fetchLinkedInDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchLinkedInDataRequest,
  fetchLinkedInDataSuccess,
  fetchLinkedInDataFailure
} = linkedInSlice.actions;

export default linkedInSlice.reducer;