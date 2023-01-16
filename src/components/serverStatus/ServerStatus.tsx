import { useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { getServerStatus } from '../../redux/reducer/serverSlice';
import { ServerComponent } from './components/ServerComponent';
import './serverStatusStyle.css';

export const ServerStatus = () => {
  const serverData = useAppSelector((state) => state.server.serverData);
  const dispatch = useAppDispatch();
  console.log(serverData);

  useEffect(() => {
    dispatch(getServerStatus());
  }, []);

  return (
    <div className='serverContainer'>
      {serverData ? (
        serverData.map((server: any) => (
          <ServerComponent key={server[0]} serverData={server} />
        ))
      ) : (
        <PropagateLoader />
      )}
    </div>
  );
};
