import { StatsValueProps } from '../../../homeTypes';

export const StatsValue = ({ statsData }: StatsValueProps) => (
  <p className='statsValue'>
    {statsData.name}: {statsData.value}
  </p>
);
