import { Datum } from '../../../../redux/initialStates/Types/playerStatsStateType';

interface StatsValueProps {
  data: Datum;
}

export const StatsValue = ({ data }: StatsValueProps) => {
  return (
    <p className='statsValue'>
      {data.name}: {data.value}
    </p>
  );
};
