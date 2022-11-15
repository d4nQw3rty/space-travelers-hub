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
  },
  [status, dispatch]);

  return (
    <>
      <div>
        <div className={style.container}>
          <div className={style.itemContainer}>
            <p className={`${style.itemClass1} ${style.itemPadding}`}>Mission</p>
            <p className={`${style.itemClass2} ${style.itemPadding}`}>Description</p>
            <p className={`${style.itemClass1} ${style.itemPadding}`}>Status</p>
            <p className={`${style.itemClass1} ${style.itemPadding}`} />
          </div>
        </div>
      </div>
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <div className={style.container}>
            <div className={style.itemContainer}>
              <p className={`${style.itemClass1} ${style.itemPadding}`}>{mission.mission_name}</p>
              <p className={`${style.itemClass2} ${style.itemPadding}`}>{mission.description}</p>
              <p className={`${style.itemClass1} ${style.itemPadding}`}>{mission.status}</p>
              <p className={`${style.itemClass1} ${style.itemPadding}`}>
                <button type="button" className={style.button}>Join Mission</button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Missions;
