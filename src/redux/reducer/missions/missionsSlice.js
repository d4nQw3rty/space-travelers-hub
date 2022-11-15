import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Action

// Reducer

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const missions = await response.json();
    return missions;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      const value = state;
      value.status = 'loading';
    },
    [fetchMissions.fulfilled]: (state, action) => {
      const value = state;
      value.status = 'succeeded';
      value.missions = state.missions.concat(action.payload);
    },
    [fetchMissions.rejected]: (state) => {
      const value = state;
      value.status = 'failed';
    },
  },
});

export default missionsSlice.reducer;
