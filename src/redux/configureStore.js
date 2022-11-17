import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './reducer/missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
