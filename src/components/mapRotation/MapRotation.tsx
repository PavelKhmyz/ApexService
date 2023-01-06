import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { getRotation } from '../../redux/reducer/stateSlice';
import './mapRotation.css';

export const MapRotation = () => {
  const dispatch = useDispatch();
  const maps = useSelector((state: any) => JSON.parse(state.map.maps));

  useEffect(() => {
    dispatch(getRotation());
  }, []);

  useEffect(() => {
    console.log(maps);
  }, [maps]);
  return (
    <div className='container'>
      {maps ? (
        <div
          style={{ backgroundImage: `url(${maps.current.asset})` }}
          className='bla'
        >
          Map Rotation
        </div>
      ) : (
        <PropagateLoader />
      )}
    </div>
  );
};
