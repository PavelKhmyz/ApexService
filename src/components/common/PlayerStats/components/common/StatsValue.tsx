import { Datum } from '../../../../../redux/initialStates/Types/playerStatsStateType';

export interface StatsValueProps {
  statsData: Datum;
}

export const StatsValue = ({ statsData }: StatsValueProps) => {
  const isActual = statsData.value > -1;
  if (isActual) {
    return (
      <p className='statsValue'>
        {statsData.name}: {statsData.value}
      </p>
    );
  }
  return null;
};
