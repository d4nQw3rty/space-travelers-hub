import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Dragons from './pages/Dragons';
import MyProfile from './pages/MyProfile';
import NavBar from './components/NavBar';
import { fetchRockets } from './redux/reducer/rockets/rocketsSlice';
import { fetchMissions } from './redux/reducer/missions/missionsSlice';
import fetchDragons from './redux/reducer/dragons/fetchDragons';

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchRockets());
  dispatch(fetchMissions());
  dispatch(fetchDragons());
  return (
    <>
      <main className="d-flex">
        <NavBar />
        <hr />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="dragons" element={<Dragons />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Routes>
      </main>
    </>

  );
};

export default App;
