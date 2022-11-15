import { configureStore } from '@reduxjs/toolkit';
// imprt dragonsReducer from '../dragons/dragonsSlice';
import missionsReducer from './reducer/missions/missionsSlice';
// import rocketsReducer from '../rockets/rocketsSlice';

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});
