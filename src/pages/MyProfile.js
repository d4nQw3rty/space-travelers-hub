import React from 'react';
import { useSelector } from 'react-redux';
import style from './MyProfile.module.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
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
    </div>
  );
};

export default MyProfile;
