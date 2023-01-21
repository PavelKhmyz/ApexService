import './playerStatsStyle.css';

export const RankComponent = ({ data, name }: any) => {
  return (
    <div className='rankComponentContainer'>
      <p className='rankComponentTitle'>{name}</p>
      <img className='rankComponentImg' src={data.rankImg} />
      <p className='blabla'>{data.rankName}</p>
      <p className='blabla'>Rank Score: {data.rankScore}</p>
    </div>
  );
};
