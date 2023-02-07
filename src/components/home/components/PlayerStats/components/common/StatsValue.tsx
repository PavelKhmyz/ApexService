import { StatsValueProps } from '../../../homeTypes';

export const StatsValue = ({ statsData }: StatsValueProps) => {
  console.log(statsData);
  const isActual = statsData.value > -1;
  if (isActual) {
    return (
      <p className='statsValue'>
        {statsData.name}: {statsData.value}
      </p>
    );
  }
  return <p />;
};
