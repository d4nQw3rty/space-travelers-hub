// eslint-disable
import React from 'react';

const Dragon = (props) => {
  return (
    <div key={Date.now()} className="dragonCard">
      <p className="dragonName">name</p>
      <p className="dragonType">type</p>
      { (true) ? <button className="cancel" type="button">Cancel Reservation</button> : <button className="reserve" type="button">Make Reservation</button>}
    </div>
  );
};

export default Dragon;

