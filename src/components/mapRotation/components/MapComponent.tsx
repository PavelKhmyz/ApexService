import { useAppSelector } from '../../../redux/hooks/hook';
import { Current, Next } from '../../../redux/initialStates/Types/mapStateType';
import { parseDate, parseTime } from '../utils/parsingDate';

interface MapComponentPropsType {
  data: Current | Next;
}

export const MapComponent = ({ data }: MapComponentPropsType) => {
  const time = useAppSelector((state) => state.map.time);

  return (
    <div className='mapComponent'>
      <h1 style={{ color: 'white' }}>
        {!data.remainingTimer && 'NEXT:'} {data.map}
      </h1>
      <h3 style={{ color: 'white' }}>
        {parseDate(data.readableDate_start)} -{' '}
        {parseDate(data.readableDate_end)}
      </h3>
      {data.remainingTimer && (
        <h2 style={{ color: 'white' }}>{parseTime(time)}</h2>
      )}
    </div>
  );
};
