import React from 'react';
import useDispatch from 'react-redux';
import { reserveDragons, cancelDragons } from '../redux/dragonStore'; 

const Dragons = (props) => {
  const { id, name, type, flickr_images } = props;
  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserveDragons(id);
  }
  const handleCancel =() => {
    dispatch(cancelDragons(id))
  }


  return (
    <div className="dragons">
      <img src={flickr_images}/>
      <p className="dragonName">{name}</p>
      <p className="dragonType">{type}</p>
      {props.reserved && (<button id={id} className="cancel" type="button" onClick={handleCancel}>Cancel Reservation</button>)}
      {if (props.reserved === false) <button id={id} className="reserve" type="button" onClick={handleReserve}>Make Reservation</button>}
    </div>
  );
};

export default Dragons;
