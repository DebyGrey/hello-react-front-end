import { createSlice } from '@reduxjs/toolkit';
import fetchGreeting from '../thunk';

const initialState = {
  greeting: 'Loading...',
  isLoading: true,
  error: false,
  errMsg: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.greeting = '';
        state.isLoading = true;
        state.error = false;
        state.errMsg = '';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload.greeting;
        state.isLoading = false;
        state.error = false;
        state.errMsg = '';
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload.error;
      });
  },
});

export default greetingSlice.reducer;
