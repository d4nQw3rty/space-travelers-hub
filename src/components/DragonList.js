import { useSelector, useDispatch } from 'react-redux';
import style from './DragonList.module.css';
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

    return (
      <section className={style.dragonsContainer}>
        {
          dragons.map((dragon) => (
            <div key={dragon.id} className={style.dragonCard}>
              <img src={dragon.image[0]} alt="" className={style.dragonImg} />
              <p className={style.dragonName}>{dragon.name}</p>
              <p className={style.dragonType}>{dragon.type}</p>
              {
                (dragon.reserved)
                  ? <button className={style.cancel} type="button" onClick={() => dispatch(cancelDragon({ id: dragon.id }))}>Cancel Reservation</button>
                  : <button className={style.reserve} type="button" onClick={() => dispatch(reserveDragon({ id: dragon.id }))}>Make Reservation</button>
              }
            </div>
          ))
        }
      </section>
    );
  };

  return (
    <div>
      <h1 className={style.dragonsTitle}>List of Dragons</h1>
      {showDragons()}
    </div>
  );
};

export default DragonList;
