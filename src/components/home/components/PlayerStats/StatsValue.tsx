import './playerStatsStyle.css';

export const StatsValue = ({ data }: any) => {
  return (
    <p className='blabla'>
      {data.name}: {data.value}
    </p>
  );
};
