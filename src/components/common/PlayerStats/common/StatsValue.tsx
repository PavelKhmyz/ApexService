import { Datum } from '../PlayerStats.type';

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
