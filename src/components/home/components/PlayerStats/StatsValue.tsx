import { Datum } from '../../../../redux/initialStates/Types/playerStatsStateType';
import './playerStatsStyle.css';

interface StatsValueProps {
  data: Datum;
}

export const StatsValue = ({ data }: StatsValueProps) => {
  return (
    <p className='blabla'>
      {data.name}: {data.value}
    </p>
  );
};
