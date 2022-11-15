import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Missions.module.css';
import { fetchMissions } from '../redux/reducer/missions/missionsSlice';
// import missionsReducer from '../missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  const renderMissions = () => {
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
    if (status === 'succeeded') {
      return missions.map((mission) => (
        <div key={mission.mission_id} className={style.mission}>
          <h3>{mission.mission_name}</h3>
          <p>{mission.description}</p>
        </div>
      ));
    }
    if (status === 'failed') {
      return <div>Failed to load missions</div>;
    }
  };

  return (
    <div className={style.missionsContainer}>
      <h2>Missions</h2>
      {renderMissions()}
    </div>
  );
}

export default Missions;
