import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook';
import {
  addName,
  getPlayerStats,
} from '../../../../redux/reducer/playerStatsSlice';
import { Input } from '../../../common/Input';
import { RadioBlock } from '../../../common/radioBlock/RadioBlock';
import './statsInputStyle.scss';

const inputConfig = {
  nameInput: {
    id: 'inputFromStats',
    text: 'Name:',
    type: 'text',
    placeholder: 'Enter your Player name',
  },
};

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
        data={inputConfig.nameInput}
        onChangeFunc={(event) => {
          handleChangeName(event);
        }}
        value={nameValue}
      />
      <RadioBlock fromAuth={false} />
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
