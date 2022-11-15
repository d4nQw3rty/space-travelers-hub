import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios('https://api.spacexdata.com/v3/rockets');
    return response.data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      const value = state;
      value.status = 'loading';
    },
    [fetchRockets.fulfilled]: (state, action) => {
      const value = state;
      value.status = 'succeeded';
      value.rockets = state.rockets.concat(action.payload);
    },
    [fetchRockets.rejected]: (state) => {
      const value = state;
      value.status = 'failed';
    },
  },
});

export default rocketsSlice.reducer;
