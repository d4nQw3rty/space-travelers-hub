import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import style from './Rockets.module.css';
import { fetchRockets } from '../redux/reducer/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const renderRockets = () => {
    if (status === 'loading') {
      return <div>Loading...</div>;
    }

    if (status === 'failed') {
      return <div>Failed to load rockets</div>;
    }

    return rockets.map((rocket) => (
      <div key={uuid()} className={style.rocketCard}>
        <img src={rocket.flickr_images[0]} alt="rocket" height="300px" width="400px" />
        <div className="description">
          <h3>{rocket.rocket_name}</h3>
          <p>
            <span className={style.reserved}>{ Math.random() < 0.3 ? 'Reserved' : ''}</span>
            {rocket.description}
          </p>
          <button className={style.button} type="button">Reserve Rocket</button>
        </div>
      </div>
    ));
  };

  return (
    <div className={style.rocketsContainer}>
      <h2>Rockets</h2>
      {renderRockets()}
    </div>
  );
};

export default Rockets;
