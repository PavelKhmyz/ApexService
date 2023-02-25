import { useState } from 'react';
import { useAppDispatch } from '../../../../../redux/hooks/hook';
import { filterArray, setPlayerData } from '../../../../../redux/reducer/userSlice';
import { CloseIcon } from '../../../../../svg/CloseIcon';
import { Input } from '../../../../common/Input';
import { SelectElement } from '../../../../common/Select/SelectElement';
import { accountFormInputConfig, optionConfig } from './componentsConfig';
import { AccountFormProps } from './settingsTypes';

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
        <CloseIcon />
      </button>
      <Input
        data={accountFormInputConfig}
        onChangeFunc={(event) => handleChangeUserName(event)}
        value={playerName}
        disabled={isDisabled}
      />
      <SelectElement
        title={'Platform:'}
        value={userPlatform}
        optionsArray={optionConfig}
        handleChange={handleChangeUserPlatform}
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
