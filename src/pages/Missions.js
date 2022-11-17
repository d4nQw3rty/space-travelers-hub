import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Missions.module.css';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/reducer/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  return (
    <>
      <div>
        <div className={style.container}>
          <div className={style.itemContainer}>
            <p className={`${style.itemClass1} ${style.itemPadding}`}>
              Mission
            </p>
            <p className={`${style.itemClass2} ${style.itemPadding}`}>
              Description
            </p>
            <p className={`${style.itemClass1} ${style.itemPadding}`}>Status</p>
            <p className={`${style.itemClass1} ${style.itemPadding}`} />
          </div>
        </div>
      </div>
      {missions.map((mission, index) => (
        <div key={mission.id} id={index + 1} className={style.item}>
          <div className={style.container}>
            <div className={style.itemContainer}>
              <p className={`${style.itemClass1} ${style.itemPadding}`}>
                {mission.mission_name}
              </p>
              <p className={`${style.itemClass2} ${style.itemPadding}`}>
                {mission.description}
              </p>
              <p className={`${style.itemClass1} ${style.itemPadding} ${style.badge}`}>
                {
                  mission.reserved
                    ? (<span className={style.active}>Active Member</span>)
                    : (<span className={style.inactive}>NOT A MEMBER</span>)
                }
              </p>
              <div
                className={`${style.itemClass1} ${style.itemPadding} ${style.button}`}
              >
                {
                  mission.reserved
                    ? (<button type="button" className={style.buttonLeaveMission} onClick={() => dispatch(leaveMission(mission))}>Leave Missin</button>)
                    : (<button type="button" className={style.buttonJoinMission} onClick={() => dispatch(joinMission(mission))}>Join Missin</button>)
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Missions;
