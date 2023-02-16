import { useAppSelector } from '../../../redux/hooks/hook';
import { ServerElementProps } from './serverStatusType';

export const ServerElement = (props: ServerElementProps) => {
  const { data } = props;
  const theme = useAppSelector((state) => state.user.theme);
  const isDown = () => {
    if (data[1].Status === 'DOWN') {
      return { color: 'red', borderColor: 'red' };
    }
    if (data[1].Status === 'SLOW') {
      return { color: 'orange', borderColor: 'orange' };
    }
    return { color: 'green', borderColor: 'green' };
  };

  return (
    <div className='serverElement' style={isDown()}>
      <p style={{ color: theme.fontColor, fontSize: '25px' }}>{data[0]}</p>
      <div>
        <p>Status: {data[1].Status}</p>
        {data[1].Status !== 'DOWN' && data[1].ResponseTime && <p>Ping: {data[1].ResponseTime}</p>}
      </div>
    </div>
  );
};
