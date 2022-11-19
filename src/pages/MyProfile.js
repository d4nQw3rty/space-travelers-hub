import React from 'react';
import { useSelector } from 'react-redux';
import style from './MyProfile.module.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);
  const dragons = useSelector((state) => state.dragons.dragons);
  return (
    <div className={style.MyProfile}>
      <div className={style.MyProfileChild}>
        <h2 className={style.ChildTitle}>My Missions</h2>
        <ul className={style.list}>
          {missions.filter((mission) => mission.reserved).map((mission) => (
            <li key={mission.mission_id} className={style.listChild}>
              {mission.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.MyProfileChild}>
        <h2 className={style.ChildTitle}>My Rockets</h2>
        <ul className={style.list}>
          {rockets.filter((rocket) => rocket.reserved).map((rocket) => (
            <li key={rocket.id} className={style.listChild}>
              {rocket.rocket_name}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.MyProfileChild}>
        <h2 className={style.ChildTitle}>My Dragons</h2>
        <ul className={style.list}>
          {dragons.filter((dragon) => dragon.reserved).map((dragon) => (
            <li key={dragon.id} className={style.listChild}>
              {dragon.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
