import PropagateLoader from 'react-spinners/PropagateLoader';
import {
  ServerProps,
  ServerResponseStateType,
} from '../../../redux/initialStates/Types/serverInitialStateType';
import { ServerElement } from './ServerElement';

interface ServerComponentProps {
  serverData: ServerResponseStateType;
}

export const ServerComponent = (props: ServerComponentProps) => {
  const { serverData } = props;
  const parse = Object.entries(serverData[1]);
  return (
    <div className='serverComponentWrapper'>
      <p>{serverData[0]}</p>
      <div className='serverComponent'>
        {parse ? (
          parse.map((server: ServerProps) => (
            <ServerElement key={server[0]} data={server} />
          ))
        ) : (
          <PropagateLoader />
        )}
      </div>
    </div>
  );
};
