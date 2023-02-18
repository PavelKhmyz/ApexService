import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks/hook';
import {
  addName,
  addPlatform,
  getPlayerStats,
} from '../../../../../redux/reducer/playerStatsSlice';
import { Input } from '../../../../common/Input';
import { RadioBlock } from '../../../../common/radioBlock/RadioBlock';
import { statsInputConfig } from './elementConfig';
import '../titleComponent.style.scss';

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
    <div className='inputWrapper'>
      <div className='inputBlock'>
        <Input
          data={statsInputConfig.nameInput}
          onChangeFunc={(event) => {
            handleChangeName(event);
          }}
          value={nameValue}
        />
        <RadioBlock onChange={addPlatform} />
        <button disabled={isValid} className='inputButton' type='button' onClick={getStats}>
          Show Stats
        </button>
      </div>
    </div>
  );
};
