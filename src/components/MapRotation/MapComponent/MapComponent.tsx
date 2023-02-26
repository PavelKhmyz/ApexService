import { Current, Next } from '../MapRotation.type';
import { parsingDate } from './MapComponent.utils';

interface MapComponentPropsType {
  data: Current | Next;
  time?: number | null;
}

export const MapComponent = ({ data, time = null }: MapComponentPropsType) => {
  const { parseReminingTime, parseTime } = parsingDate();

  return (
    <div className='mapComponent'>
      <h1 style={{ color: 'white' }}>
        {!(data as Current).remainingTimer && 'NEXT:'} {data.map}
      </h1>
      <h3 style={{ color: 'white' }}>
        {parseTime(data.readableDate_start)} - {parseTime(data.readableDate_end)}
      </h3>
      {(data as Current).remainingTimer && (
        <h2 style={{ color: 'white' }}>{parseReminingTime(time)}</h2>
      )}
    </div>
  );
};
