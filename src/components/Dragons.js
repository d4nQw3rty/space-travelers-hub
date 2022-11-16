import React from 'react';

const Dragon = (props) => {
  console.log(props);
  return (
    <div key={props} className="dragonCard">
      <p className="dragonName">name</p>
      <p className="dragonType">type</p>
      {(true) ? <button className="cancel" type="button">Cancel Reservation</button> : <button className="reserve" type="button">Make Reservation</button>}
    </div>
  );
};

export default Dragon;
