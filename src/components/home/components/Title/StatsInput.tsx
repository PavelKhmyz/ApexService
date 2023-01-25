import { PcLogo } from './PcLogo';
import { PsLogo } from './PsLogo';
import { XboxLogo } from './XboxLogo';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import {
  addName,
  getPlayerStats,
} from '../../../../redux/reducer/playerStatsSlice';
import { Input } from '../../../common/Input';
import { RadioButton } from './RadioButtons';
import { useEffect, useState } from 'react';

export const StatsInput = () => {
  const dispatch = useAppDispatch();
  const nameValue = useAppSelector((state) => state.playerStats.name);
  const platformValue = useAppSelector((state) => state.playerStats.platform);
  const [isValid, setIsValid] = useState(true);

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

  useEffect(() => {
    if (nameValue && platformValue) {
      setIsValid(false);
    }
  }, [nameValue, platformValue]);

  return (
    <div className='input'>
      <Input
        text={'Name:'}
        type={'text'}
        placeholder={'Enter your Player name'}
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
      <button
        disabled={isValid}
        className='inputButton'
        type='button'
        onClick={getStats}
      >
        Show Stats
      </button>
    </div>
  );
};
