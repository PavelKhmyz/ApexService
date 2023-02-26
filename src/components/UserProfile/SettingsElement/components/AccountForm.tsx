import { useState } from 'react';
import { UserEditableData } from '../../../../axios/requests';
import { useAppDispatch } from '../../../../redux/hooks/hook';
import { CloseIcon } from '../../../../svg/CloseIcon';
import { Input } from '../../../common/Input';
import { SelectElement } from '../../../common/Select/SelectElement';
import { filterArray, setPlayerData } from '../../UserProfile.slice';

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

  const handleChangeUserPlatform = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserPlatform(event.target.value);
  };

  const handleChangeDisable = () => {
    setIsDisabled((prev) => !prev);
  };
  const removeElement = () => {
    const deletedData = {
      name: playerName,
      platform: userPlatform,
      id: playerName + userPlatform,
      checked: false,
    };
    dispatch(filterArray(deletedData));
  };

  const savePlayerData = async () => {
    const storedData = {
      name: playerName,
      platform: userPlatform,
      id: playerName + userPlatform,
      checked: false,
    };
    handleChangeDisable();
    dispatch(filterArray(storedData));
    dispatch(setPlayerData(storedData));
  };

  return (
    <div className='settingsInput'>
      <button type='button' className='removeButton' onClick={removeElement}>
        <CloseIcon />
      </button>
      <Input
        data={{
          text: 'PlayerName:',
          type: 'text',
          placeholder: 'Enter Player Name',
          id: 'nameInput',
        }}
        onChange={(event) => handleChangeUserName(event)}
        value={playerName}
        disabled={isDisabled}
      />
      <SelectElement
        title={'Platform:'}
        value={userPlatform}
        optionsArray={[
          { data: 'X-box', value: 'X1' },
          { data: 'PlayStation', value: 'PS4' },
          { data: 'PC', value: 'PC' },
        ]}
        onChange={handleChangeUserPlatform}
        disable={isDisabled}
      />
      <div className='buttonsBlock'>
        <button type='button' onClick={handleChangeDisable} disabled={!isDisabled}>
          Edit
        </button>
        <button type='button' onClick={savePlayerData} disabled={isDisabled}>
          Save
        </button>
      </div>
    </div>
  );
};
