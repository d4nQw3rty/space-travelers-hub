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
  reducers: {
    reserveRocket: (state, action) => ({
      ...state,
      rockets: state.rockets.map((thisRocket) => {
        if (thisRocket.id === action.payload.id) {
          return {
            ...thisRocket,
            reserved: !thisRocket.reserved,
          };
        }
        return thisRocket;
      }),
    }),
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      const value = state;
      value.rockets = action.payload.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        flickr_images: rocket.flickr_images,
        description: rocket.description,
        reserved: false,
      }));
    },
    [fetchRockets.rejected]: (state) => {
      const value = state;
      value.status = 'failed';
    },
  },
});

export default rocketsSlice.reducer;
export const { reserveRocket } = rocketsSlice.actions;
