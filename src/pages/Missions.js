import React from 'react';
import style from './Missions.module.css';

const Missions = () => (
  <div>
    <table className={style.thead}>
      <tr className={style.tr}>
        <td className={style.td1}>Mission</td>
        <td className={style.td2}>Description</td>
        <td>Status</td>
        <td />
      </tr>
    </table>
  </div>
);

export default Missions;
