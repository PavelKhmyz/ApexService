import { updateDb } from '../../../axios/authRequests';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook';
import { RadioButton } from '../../common/RadioBlock/components/RadioButton';
import { filterArray, setPlayerData, selectUser } from '../UserProfile.slice';
import { AccountForm } from './components/AccountForm';
import { ChangeThemeComponent } from './components/ChangeThemeComponent';
import './SettingsElement.style.scss';

export const SettingsElement = () => {
  const dispatch = useAppDispatch();
  const { playerData } = useAppSelector((state) => state.user);
  const { email } = useAppSelector((state) => state.auth);

  const handleAddNewAccount = () => {
    const newAccount = { name: '', platform: 'X1', id: 'empty', checked: false };
    dispatch(filterArray(newAccount));
    dispatch(setPlayerData(newAccount));
  };
  const handleSaveChanges = () => {
    const savingData = { email, userAccounts: playerData };
    updateDb(savingData);
  };
  const handleChangePlatform = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectUser(event.target.value));
  };

  return (
    <div className='settingsWrapper'>
      <div className='themeContainer'>
        <h2>Change Theme :</h2>
        <ChangeThemeComponent />
      </div>
      <div className='accountsBlock'>
        <h2>Your Accounts :</h2>
        <div className='addSaveButtons'>
          <button type='button' onClick={handleAddNewAccount} className='addButton'>
            Add New Acount
          </button>
          <button type='button' onClick={handleSaveChanges} className='addButton'>
            Save Changes
          </button>
        </div>
        <div className='accountsWrapper'>
          {playerData.map((element) => (
            <RadioButton
              key={element.id}
              data={{
                id: element.id,
                value: element.id,
                onChange: handleChangePlatform,
              }}
              child={<AccountForm key={element.id} inputsValue={element} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
