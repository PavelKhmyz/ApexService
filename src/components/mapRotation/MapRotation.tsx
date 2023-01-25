import { useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import {
  changeTime,
  clearState,
  getRotation,
} from '../../redux/reducer/mapSlice';
import { MapComponent } from './components/MapComponent';
import './mapRotation.css';

export const MapRotation = () => {
  const dispatch = useAppDispatch();
  const maps = useAppSelector((state) => state.map.maps);
  const time = useAppSelector((state) => state.map.time);

  const handleChangeTime = () => {
    dispatch(changeTime());
  };
  // const handleClear = () => {
  //   () => dispatch(clearState());
  // };

  useEffect(() => {
    if (time) {
      setTimeout(handleChangeTime, 1000);
    }
    if (time === 0) {
      dispatch(getRotation());
    }
  }, [time]);

  useEffect(() => {
    if (!maps) {
      dispatch(getRotation());
    }
  }, []);

  // useEffect(() => {
  //   return handleClear();
  // }, []);

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
