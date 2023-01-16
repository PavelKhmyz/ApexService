import PropagateLoader from 'react-spinners/PropagateLoader';
import { ServerElement } from './ServerElement';

export const ServerComponent = (props: any) => {
  const { serverData } = props;
  const parse = Object.entries(serverData[1]);
  return (
    <div className='serverComponentWrapper'>
      <p>{serverData[0]}</p>
      <div className='serverComponent'>
        {parse ? (
          parse.map((server: any) => (
            <ServerElement key={server[0]} data={server} />
          ))
        ) : (
          <PropagateLoader />
        )}
      </div>
    </div>
  );
};
