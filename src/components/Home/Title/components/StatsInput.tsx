import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../redux/hooks/hook';
import { fetchPlayerStats } from '../../../../redux/reducer/playerStatsSlice';
import { Input } from '../../../common/Input';
import { RadioBlock } from '../../../common/RadioBlock/RadioBlock';

const statsInputConfig = {
  nameInput: {
    id: 'inputFromStats',
    text: 'Name:',
    type: 'text',
    placeholder: 'Enter your Player name',
  },
};

export const StatsInput = () => {
  const dispatch = useAppDispatch();
  const [nameValue, setNameValue] = useState('');
  const [platformValue, setPlatformValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const getStats = () => {
    const data = {
      name: nameValue,
      platform: platformValue,
    };
    dispatch(fetchPlayerStats(data));
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
        <RadioBlock onChange={setPlatformValue} />
        <button disabled={isValid} className='inputButton' type='button' onClick={getStats}>
          Show Stats
        </button>
      </div>
    </div>
  );
};
