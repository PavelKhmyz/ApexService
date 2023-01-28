import { Datum } from '../../../../../redux/initialStates/Types/playerStatsStateType';

interface StatsValueProps {
  statsData: Datum;
}

export const StatsValue = ({ statsData }: StatsValueProps) => (
  <p className='statsValue'>
    {statsData.name}: {statsData.value}
  </p>
);
