// import dragonsReducer from '../dragons/dragonsSlice';
import missionsReducer from './reducer/missions/missionsSlice';
import rocketsReducer from './reducer/rockets/rocketsSlice';
import dragonsReducer from './reducer/dragons/dragonSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
