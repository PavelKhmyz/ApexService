import { useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { getRotation } from '../../redux/reducer/mapSlice';
import { MapComponent } from './components/MapComponent';
import './mapRotation.css';

export const MapRotation = () => {
  const dispatch = useAppDispatch();
  const maps = useAppSelector((state) => state.map.maps);

  useEffect(() => {
    if (!maps) {
      dispatch(getRotation());
    }
  }, []);

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
