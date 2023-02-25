import { useEffect, useCallback } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { MapComponent } from './MapComponent/MapComponent';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { changeTime, clearTime, getRotation } from '../../redux/reducer/mapSlice';
import './MapRotation.style.scss';
import { ErrorComponent } from '../common/ErrorComponent';

export const MapRotation = () => {
  const dispatch = useAppDispatch();
  const { maps, reminingTimer, error, loading } = useAppSelector((state) => state.map);
  const { theme } = useAppSelector((state) => state.user);

  const handleChangeTime = useCallback(() => {
    dispatch(changeTime());
  }, [dispatch]);

  const handleClear = useCallback(() => {
    dispatch(clearTime());
  }, [dispatch]);

  useEffect(() => {
    if (reminingTimer === (0 || null)) {
      dispatch(getRotation());
    }
    if (reminingTimer) {
      setTimeout(handleChangeTime, 1000);
    }
  }, [dispatch, handleChangeTime, handleClear, reminingTimer]);

  useEffect(() => handleClear, [handleClear]);

  return (
    <div className='wrapper'>
      <PropagateLoader loading={loading} color={theme.fontColor} />
      {maps && (
        <div style={{ backgroundImage: `url(${maps.current.asset})` }} className='container'>
          <MapComponent data={maps.current} time={reminingTimer} />
          <MapComponent data={maps.next} />
        </div>
      )}
      {error && <ErrorComponent message={error} />}
    </div>
  );
};
