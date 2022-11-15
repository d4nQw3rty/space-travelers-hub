import React, {useEffect} from 'react';
import Dragons from './Dragons.jsx';
import {useDispatch, useSelector} from 'react-redux';

const DragonList =() => {
  const store = useSelector((state) => state.dragons)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiDragons(dispatch))
  }, [])

  return (
    <div className="DragonList">
      {store && store.map((item) => {
        <Dragons dragon={item} />
      })}
    </div>
      )
    }

    export default DragonList;
