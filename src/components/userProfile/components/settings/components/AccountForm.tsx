import { useState } from 'react';
import { useAppDispatch } from '../../../../../redux/hooks/hook';
import { UserEditableData } from '../../../../../redux/initialStates/Types/initialStateType';
import {
  filterArray,
  setPlayerData,
} from '../../../../../redux/reducer/userSlice';
import { Input } from '../../../../common/Input';

const inputConfig = {
  text: 'PlayerName:',
  type: 'text',
  placeholder: 'Enter Player Name',
  id: 'nameInput',
};
interface AccountFormProps {
  inputsValue: UserEditableData;
}

export const AccountForm = ({ inputsValue }: AccountFormProps) => {
  const { name, platform } = inputsValue;
  const dispatch = useAppDispatch();
  const [playerName, setPlayerName] = useState(name);
  const [userPlatform, setUserPlatform] = useState(platform);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleChangeUserPlatform = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserPlatform(event.target.value);
  };

  const handleChangeDisable = () => {
    setIsDisabled((prev) => !prev);
  };

  const savePlayerData = () => {
    const data = {
      name: playerName,
      platform: userPlatform,
      id: playerName + userPlatform,
    };
    handleChangeDisable();
    dispatch(filterArray(data));

    dispatch(setPlayerData(data));
  };
  return (
    <div className='settingsInput'>
      <Input
        data={inputConfig}
        onChangeFunc={(event) => handleChangeUserName(event)}
        value={playerName}
        disabled={isDisabled}
      />
      <label htmlFor='selectId' className='settingsSelect'>
        <span>Platform:</span>
        <select
          onChange={(event) => handleChangeUserPlatform(event)}
          value={userPlatform}
          id='selectId'
          disabled={isDisabled}
        >
          <option value='X1'>X-box</option>
          <option value='PS4'>PlayStation</option>
          <option value='PC'>PC</option>
        </select>
      </label>
      <div className='buttonsBlock'>
        <button
          type='button'
          onClick={handleChangeDisable}
          disabled={!isDisabled}
        >
          Edit
        </button>
        <button type='button' onClick={savePlayerData} disabled={isDisabled}>
          Save
        </button>
      </div>
    </div>
  );
};
