import { configureStore } from '@reduxjs/toolkit';
// imprt dragonsReducer from '../dragons/dragonsSlice';
import missionsReducer from './reducer/missions/missionsSlice';
// import rocketsReducer from '../rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
