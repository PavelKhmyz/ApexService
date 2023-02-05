import { useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { ServerResponseStateType } from '../../redux/initialStates/Types/serverInitialStateType';
import { getServerStatus } from '../../redux/reducer/serverSlice';
import { ServerComponent } from './components/ServerComponent';
import './serverStatusStyle.scss';

export const ServerStatus = () => {
  const serverData = useAppSelector((state) => state.server.serverData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getServerStatus());
  }, [dispatch]);

  return (
    <div className='serverContainer'>
      {serverData ? (
        serverData.map((server: ServerResponseStateType) => (
          <ServerComponent key={server[0]} serverData={server} />
        ))
      ) : (
        <PropagateLoader color='white' />
      )}
    </div>
  );
};
