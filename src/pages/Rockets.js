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
        <img src={rocket.flickr_images[0]} alt="rocket" height="200px" width="200px" />
        <div className="description">
          <h3 className={style.test}>{rocket.rocket_name}</h3>
          <p>{rocket.description}</p>
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
