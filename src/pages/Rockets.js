import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Rockets.module.css';
import { cancelRocket, reserveRocket } from '../redux/reducer/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);

  const renderRockets = () => {
    if (status === 'loading') {
      return <div>Loading...</div>;
    }

    if (status === 'failed') {
      return <div>Failed to load rockets</div>;
    }

    return rockets.map((rocket) => (
      <div key={rocket.id} className={style.rocketCard}>
        <img src={rocket.flickr_images[0]} alt="rocket" height="300px" width="400px" />
        <div className="description">
          <h3 className={style.rocketName}>{rocket.rocket_name}</h3>
          <p>
            {
              rocket.reserved
                ? <span className={style.reserved}>Reserved</span>
                : null
            }
            {rocket.description}
          </p>
          {
            rocket.reserved
              ? <button type="button" onClick={() => dispatch(cancelRocket({ id: rocket.id }))} className={style.buttonActive}>cancel Rocket</button>
              : <button type="button" onClick={() => dispatch(reserveRocket({ id: rocket.id }))} className={style.button}>Reserve Rocket</button>
          }
        </div>
      </div>
    ));
  };

  return (
    <div className={style.rocketsContainer}>
      <h2 className={style.title}>Rockets</h2>
      {renderRockets()}
    </div>
  );
};

export default Rockets;
