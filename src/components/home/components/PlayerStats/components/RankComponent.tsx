import { Rank } from '../../../../../redux/initialStates/Types/playerStatsStateType';

interface RankComponentProps {
  name: string;
  data: Rank;
}

export const RankComponent = ({ data, name }: RankComponentProps) => (
  <div className='rankComponentContainer'>
    <p className='rankComponentTitle'>{name}</p>
    <img className='rankComponentImg' src={data.rankImg} alt='rank asset' />
    <p>{data.rankName}</p>
    <p>Rank Score: {data.rankScore}</p>
  </div>
);
