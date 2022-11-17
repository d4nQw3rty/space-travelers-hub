import { createSlice } from '@reduxjs/toolkit';
import fetchDragons from './fetchDragons';

const dragonSlice = createSlice({
  name: 'dragons',
  initialState: {
    dragons: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [fetchDragons.pending]: (state) => {
      const result = state;
      result.status = 'loading';
    },
    [fetchDragons.fulfilled]: (state, action) => {
      const result = state;
      result.status = 'succeeded';
      result.dragons = state.dragons.concat(action.payload);
    },
    [fetchDragons.rejected]: (state) => {
      const result = state;
      result.status = 'failed';
    },
  },
});

export default dragonSlice.reducer;
