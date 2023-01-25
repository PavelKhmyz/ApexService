import { Rank } from '../../../../redux/initialStates/Types/playerStatsStateType';

interface RankComponentProps {
  name: string;
  data: Rank;
}

export const RankComponent = ({ data, name }: RankComponentProps) => {
  return (
    <div className='rankComponentContainer'>
      <p className='rankComponentTitle'>{name}</p>
      <img className='rankComponentImg' src={data.rankImg} />
      <p>{data.rankName}</p>
      <p>Rank Score: {data.rankScore}</p>
    </div>
  );
};
