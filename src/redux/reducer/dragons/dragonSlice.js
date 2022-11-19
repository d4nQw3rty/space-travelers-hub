import { createSlice } from '@reduxjs/toolkit';
import fetchDragons from './fetchDragons';

const dragonSlice = createSlice({
  name: 'dragons',
  initialState: {
    dragons: [],
    status: 'idle',
  },
  reducers: {
    reserveDragon: (state, action) => ({
      ...state,
      dragons: state.dragons.map((dragon) => {
        if (dragon.id === action.payload.id) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      }),
    }),
    cancelDragon: (state, action) => ({
      ...state,
      dragons: state.dragons.map((dragon) => {
        if (dragon.id === action.payload.id) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      }),
    }),
  },
  extraReducers: {
    [fetchDragons.pending]: (state) => {
      const result = state;
      result.status = 'loading';
    },
    [fetchDragons.fulfilled]: (state, action) => {
      const result = state;
      result.status = 'succeeded';
      result.dragons = action.payload.map((dragon) => ({
        id: dragon.id,
        image: dragon.flickr_images,
        name: dragon.name,
        reserved: false,
        type: dragon.type,
        description: dragon.description,
      }));
    },
    [fetchDragons.rejected]: (state) => {
      const result = state;
      result.status = 'failed';
    },
  },
});

export const { reserveDragon, cancelDragon } = dragonSlice.actions;
export default dragonSlice.reducer;
