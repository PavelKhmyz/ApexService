import {
  ServerProps,
  ServerResponseStateType,
} from '../../../redux/initialStates/Types/serverInitialStateType';
import { ServerElement } from './ServerElement';

export interface ServerComponentProps {
  serverData: ServerResponseStateType;
}

export const ServerComponent = (props: ServerComponentProps) => {
  const { serverData } = props;
  const parse = Object.entries(serverData[1]);
  return (
    <div className='serverComponentWrapper'>
      <p className='serverTitle'>{serverData[0]}</p>
      <div className='serverComponent'>
        {parse.map((server: ServerProps) => (
          <ServerElement key={server[0]} data={server} />
        ))}
      </div>
    </div>
  );
};
