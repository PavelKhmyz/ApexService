import { useState } from 'react';
import { useAppDispatch } from '../../../../../redux/hooks/hook';
import { UserEditableData } from '../../../../../redux/initialStates/Types/initialStateType';
import {
  filterArray,
  setPlayerData,
} from '../../../../../redux/reducer/userSlice';
import { Input } from '../../../../common/Input';
import { SelectElement } from '../../../../common/select/SelectElement';

const inputConfig = {
  text: 'PlayerName:',
  type: 'text',
  placeholder: 'Enter Player Name',
  id: 'nameInput',
};
const optionCongig = [
  { data: 'X-box', value: 'X1' },
  { data: 'PlayStation', value: 'PS4' },
  { data: 'PC', value: 'PC' },
];
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
  const removeElement = () => {
    const data = {
      name: playerName,
      platform: userPlatform,
      id: playerName + userPlatform,
      checked: false,
    };
    dispatch(filterArray(data));
  };

  const savePlayerData = async () => {
    const data = {
      name: playerName,
      platform: userPlatform,
      id: playerName + userPlatform,
      checked: false,
    };
    handleChangeDisable();
    dispatch(filterArray(data));
    dispatch(setPlayerData(data));
  };

  return (
    <div className='settingsInput'>
      <button type='button' className='removeButton' onClick={removeElement}>
        Remove
      </button>
      <Input
        data={inputConfig}
        onChangeFunc={(event) => handleChangeUserName(event)}
        value={playerName}
        disabled={isDisabled}
      />
      <SelectElement
        title={'Platform:'}
        value={userPlatform}
        optionsArray={optionCongig}
        handleChange={handleChangeUserPlatform}
        disable={isDisabled}
      />
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
