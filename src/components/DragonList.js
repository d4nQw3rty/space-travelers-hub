import { useSelector, useDispatch } from 'react-redux';

import { reserveDragon, cancelDragon } from '../redux/reducer/dragons/dragonSlice';

const DragonList = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const status = useSelector((state) => state.dragons.status);
  const dispatch = useDispatch();

  const showDragons = () => {
    if (status === 'loading') {
      return <div className="loading"><p className="message">Loading. Please Wait.</p></div>;
    }

    if (status === 'failed') {
      return <div className="fail"><p className="failMessage">Sorry, the Dragons are not avaliable right now. Try again later</p></div>;
    }

    return dragons.map((dragon) => ( // eslint-disable-line
      <div key={dragon.id} className="dragonCard">
        <img src={dragon.image[0]} alt="" className="dragonImage" />
        <p className="dragonName">{dragon.name}</p>
        <p className="dragonType">{dragon.type}</p>
        {(dragon.reserved) ? <button className="cancel" type="button" onClick={() => dispatch(cancelDragon({ id: dragon.id }))}>Cancel Reservation</button> : <button className="reserve" type="button" onClick={() => dispatch(reserveDragon({ id: dragon.id }))}>Make Reservation</button>}
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
