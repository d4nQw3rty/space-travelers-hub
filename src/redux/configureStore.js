import { configureStore } from '@reduxjs/toolkit';
// import dragonsReducer from '../dragons/dragonsSlice';
import missionsReducer from './reducer/missions/missionsSlice';
import rocketsReducer from './reducer/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
