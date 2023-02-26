import { useState } from 'react';
import { useAppDispatch } from '../../../../redux/hooks/hook';
import { fetchPlayerStats } from '../../../common/PlayerStats/PlayerStats.slice';
import { Input } from '../../../common/Input';
import { RadioBlock } from '../../../common/RadioBlock/RadioBlock';

export const StatsInput = () => {
  const dispatch = useAppDispatch();
  const [nameValue, setNameValue] = useState('');
  const [platformValue, setPlatformValue] = useState('');

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  const getStats = () => {
    if (nameValue && platformValue) {
      const data = {
        name: nameValue,
        platform: platformValue,
      };
      dispatch(fetchPlayerStats(data));
    }
  };

  return (
    <div className='inputWrapper'>
      <div className='inputBlock'>
        <Input
          data={{
            id: 'inputFromStats',
            text: 'Name:',
            type: 'text',
            placeholder: 'Enter your Player name',
          }}
          onChange={(event) => {
            handleChangeName(event);
          }}
          value={nameValue}
        />
        <RadioBlock onChange={setPlatformValue} />
        <button className='inputButton' type='button' onClick={getStats}>
          Show Stats
        </button>
      </div>
    </div>
  );
};
