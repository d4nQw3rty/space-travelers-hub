import React from 'react';
import style from './Missions.module.css';

const Missions = () => (
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
);

export default Missions;
