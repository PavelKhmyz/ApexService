import { PcLogo } from './PcLogo';
import { PsLogo } from './PsLogo';
import { XboxLogo } from './XboxLogo';
import './statsInputStyle.css';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import {
  addName,
  getPlayerStats,
} from '../../../../redux/reducer/playerStatsSlice';
import { Input } from '../../../common/Input';
import { Logo } from '../../../header/Logo';
import { RadioButton } from './RadioButtons';

export const StatsInput = () => {
  const dispatch = useAppDispatch();
  const nameValue = useAppSelector((state) => state.playerStats.name);
  const platformValue = useAppSelector((state) => state.playerStats.platform);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addName(event.target.value));
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
        <RadioButton
          child={<XboxLogo />}
          data={{ id: 'input1', value: 'X1' }}
        />
        <RadioButton child={<PsLogo />} data={{ id: 'input2', value: 'PS4' }} />
        <RadioButton child={<PcLogo />} data={{ id: 'input3', value: 'PC' }} />
      </div>
      <button type='button' onClick={getStats}>
        Show
      </button>
    </div>
  );
};
