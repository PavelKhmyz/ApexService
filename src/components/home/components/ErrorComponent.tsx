import { PlayerStatsResponseType } from '../../../redux/initialStates/Types/playerStatsStateType';

interface ErrorComponentProps {
  data: PlayerStatsResponseType | string;
}

export const ErrorComponent = ({ data }: ErrorComponentProps) => {
  if (typeof data === 'string') {
    return <div className='errorMessage'>{data}</div>;
  }
  const { Error } = data;
  return <div className='errorMessage'>{Error}</div>;
};
