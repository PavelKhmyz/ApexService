import { Rank } from '../../../../redux/initialStates/Types/playerStatsStateType';
import './playerStatsStyle.css';

interface RankComponentProps {
  name: string;
  data: Rank;
}

export const RankComponent = ({ data, name }: RankComponentProps) => {
  return (
    <div className='rankComponentContainer'>
      <p className='rankComponentTitle'>{name}</p>
      <img className='rankComponentImg' src={data.rankImg} />
      <p className='blabla'>{data.rankName}</p>
      <p className='blabla'>Rank Score: {data.rankScore}</p>
    </div>
  );
};
