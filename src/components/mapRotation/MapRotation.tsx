import { useCallback, useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import {
  changeTime,
  clearTime,
  getRotation,
} from '../../redux/reducer/mapSlice';
import { MapComponent } from './components/MapComponent';
import './mapRotation.scss';

export const MapRotation = () => {
  const dispatch = useAppDispatch();
  const maps = useAppSelector((state) => state.map.maps);
  const time = useAppSelector((state) => state.map.time);

  const handleChangeTime = useCallback(() => {
    dispatch(changeTime());
  }, [dispatch]);

  const handleClear = useCallback(() => {
    dispatch(clearTime());
  }, [dispatch]);

  useEffect(() => {
    if (time === (0 || null)) {
      dispatch(getRotation());
    }
    if (time) {
      setTimeout(handleChangeTime, 1000);
    }
  }, [dispatch, handleChangeTime, handleClear, time]);

  useEffect(() => handleClear, [handleClear]);

  return (
    <div className='wrapper'>
      {maps ? (
        <div
          style={{ backgroundImage: `url(${maps.current.asset})` }}
          className='container'
        >
          <MapComponent data={maps.current} />
          <MapComponent data={maps.next} />
        </div>
      ) : (
        <PropagateLoader />
      )}
    </div>
  );
};
