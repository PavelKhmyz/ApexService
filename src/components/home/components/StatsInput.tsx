import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook';
import {
  addName,
  addPlatform,
  getPlayerStats,
} from '../../../redux/reducer/playerStatsSlice';
import { Input } from '../../common/Input';
import { Logo } from '../../header/Logo';
import './statsInputStyle.css';

export const StatsInput = () => {
  const dispatch = useAppDispatch();
  const nameValue = useAppSelector((state) => state.playerStats.name);
  const platformValue = useAppSelector((state) => state.playerStats.platform);

  const handleChangeName = (event: any) => {
    dispatch(addName(event.target.value));
  };

  const handleChangePlatform = (event: any) => {
    dispatch(addPlatform(event.target.value));
  };

  const getStats = () => {
    const data = {
      name: nameValue,
      platform: platformValue,
    };
    dispatch(getPlayerStats(data));
  };

  return (
    <div className='input'>
      <Logo className={'inputLogo'} />
      <Input
        text={'Name:'}
        type={'text'}
        placeholder={'Enter yor Player name'}
        onChangeFunc={(event) => {
          handleChangeName(event);
        }}
        value={nameValue}
      />
      <Input
        text={'Platform:'}
        type={'text'}
        placeholder={'Enter yor Platform'}
        onChangeFunc={(event) => {
          handleChangePlatform(event);
        }}
        value={platformValue}
      />
      <button type='button' onClick={getStats}>
        Show
      </button>
    </div>
  );
};
