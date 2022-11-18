import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchDragons from '../redux/reducer/dragons/fetchDragons';
import './DragonList.css';

const DragonList = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const status = useSelector((state) => state.dragons.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);
  const showDragons = () => {
    if (status === 'loading') {
      return <div className="loading"><p className="message">Loading. Please Wait.</p></div>;
    }

    if (status === 'failed') {
      return <div className="fail"><p className="failMessage">Sorry, the Dragons are not avaliable right now. Try again later</p></div>;
    }

return dragons.map((dragon) => ( // eslint-disable-line
  <div key={Date.now()} className="dragonCard">
        <p className="dragonName">{dragon.name}</p>
        <p className="dragonType">type</p>
        {(true) ? <button className="cancel" type="button">Cancel Reservation</button> : <button className="reserve" type="button">Make Reservation</button>}
      </div>
    ));
  };

  return (
    <div className="dragonList">
      <h1 className="list">List of Dragons</h1>
      {showDragons()}
    </div>
  );
};

export default DragonList;
