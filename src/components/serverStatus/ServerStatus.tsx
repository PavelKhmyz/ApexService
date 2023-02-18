import { useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { ServerResponseStateType } from '../../redux/initialStates/Types/serverInitialStateType';
import { fetchServerStatus } from '../../redux/reducer/serverSlice';
import { ServerComponent } from './components/ServerComponent';
import './serverStatusStyle.scss';

export const ServerStatus = () => {
  const { serverData, loadingServer } = useAppSelector((state) => state.server);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchServerStatus());
  }, [dispatch]);

  return (
    <div className='serverContainer'>
      <PropagateLoader color='white' loading={loadingServer} />
      {serverData &&
        serverData.map((server: ServerResponseStateType) => (
          <ServerComponent key={server[0]} serverData={server} />
        ))}
    </div>
  );
};
