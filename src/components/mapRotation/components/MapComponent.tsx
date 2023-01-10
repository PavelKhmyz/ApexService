import { useAppSelector } from '../../../redux/hooks/hook';
import { MapComponentPropsType } from './MapComponentsType';

export const MapComponent = (props: MapComponentPropsType) => {
  const time = useAppSelector((state) => state.map.time);

  const parseTime = () => {
    const date = new Date(time * 1000);
    const hours = () => {
      const hrs = date.getUTCHours();
      if (hrs < 10) {
        return '0' + hrs;
      } else {
        return hrs;
      }
    };
    const minutes = () => {
      const min = date.getMinutes();
      if (min < 10) {
        return '0' + min;
      } else {
        return min;
      }
    };
    const seconds = () => {
      const sec = date.getSeconds();
      if (sec < 10) {
        return '0' + sec;
      } else {
        return sec;
      }
    };
    return `Time remining: ${hours()}:${minutes()}:${seconds()}`;
  };

  const parseDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const changeDate = new Date(date.setHours(date.getHours() + 3));
    const hours = () => {
      const hrs = changeDate.getHours();
      if (hrs < 10) {
        return '0' + hrs;
      } else {
        return hrs;
      }
    };
    const minutes = () => {
      const min = changeDate.getMinutes();
      if (min < 10) {
        return '0' + min;
      } else {
        return min;
      }
    };
    return `${hours()}:${minutes()}`;
  };
  return (
    <div className='mapComponent'>
      <h1 style={{ color: 'white' }}>
        {!props.data.remainingTimer && 'NEXT:'} {props.data.map}
      </h1>
      <h3 style={{ color: 'white' }}>
        {parseDate(props.data.readableDate_start)} -{' '}
        {parseDate(props.data.readableDate_end)}
      </h3>
      {props.data.remainingTimer && (
        <h2 style={{ color: 'white' }}>{parseTime()}</h2>
      )}
    </div>
  );
};
