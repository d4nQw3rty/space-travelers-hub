import React from 'react';
import { useSelector } from 'react-redux';
import style from './MyProfile.module.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.rockets);
  return (
    <div className={style.MyProfile}>
      <div className={style.MyProfileChild}>
        <h2 className={style.ChildTitle}>My Missions</h2>
        <ul className={style.list}>
          {missions.map(
            (mission) => mission.reserved && (
            <li key={mission.id} className={style.listChild}>{mission.mission_name}</li>
            ),
          )}
        </ul>
      </div>
      <div className={style.MyProfileChild}>
        <h2 className={style.ChildTitle}>My Rockets</h2>
        <ul className={style.list}>
          {rockets.map(
            (rockets) => rockets.reserved && (
            <li key={rockets.id} className={style.listChild}>{rockets.rocket_name}</li>
            ),
          )}
        </ul>

      </div>
    </div>
  );
};

export default MyProfile;
