import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook';
import {
  addName,
  addPlatform,
  getPlayerStats,
} from '../../../redux/reducer/playerStatsSlice';
import { Input } from '../../common/Input';
import { Logo } from '../../header/Logo';
import { PcLogo } from './PcLogo';
import { PsLogo } from './PsLogo';
import { XboxLogo } from './XboxLogo';
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
      <div className='radioWrapper'>
        <div className='radioButton'>
          <input
            className='radioButtonInput'
            name='platform'
            type='radio'
            id='input1'
            value='X1'
            onClick={(event) => {
              handleChangePlatform(event);
            }}
          />
          <label htmlFor='input1'>
            <XboxLogo />
          </label>
        </div>
        <div className='radioButton'>
          <input
            className='radioButtonInput'
            name='platform'
            type='radio'
            id='input2'
            value='PS4'
            onClick={(event) => {
              handleChangePlatform(event);
            }}
          />
          <label htmlFor='input2'>
            <PsLogo />
          </label>
        </div>
        <div className='radioButton'>
          <input
            className='radioButtonInput'
            name='platform'
            type='radio'
            id='input3'
            value='PC'
            onClick={(event) => {
              handleChangePlatform(event);
            }}
          />
          <label htmlFor='input3'>
            <PcLogo />
          </label>
        </div>
      </div>
      <button type='button' onClick={getStats}>
        Show
      </button>
    </div>
  );
};
