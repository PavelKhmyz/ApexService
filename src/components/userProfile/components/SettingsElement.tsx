import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hook';
import { filterArray, setPlayerData } from '../../../redux/reducer/userSlice';
import { AccountForm } from './AccountForm';
import { ChangeThemeComponent } from './ChangeThemeComponent';
import { CheckAccountButton } from './CheckAccountButton';
import './settingsElementStyle.scss';

export const SettingsElement = () => {
  const dispatch = useAppDispatch();
  const accounts = useAppSelector((state) => state.user.playerData);
  const request = useAppSelector((state) => state.user.selectUser);

  const handleAddNewAccount = () => {
    const data = { name: '', platform: 'X1', id: 'empty' };
    dispatch(filterArray(data));
    dispatch(setPlayerData(data));
  };

  const isChecked = (id: string) => {
    if (request && request.id === id) {
      return true;
    }
    return false;
  };

  return (
    <div className='settingsWrapper'>
      <div className='themeContainer'>
        <h2>Change Theme</h2>
        <ChangeThemeComponent />
      </div>
      <div className='bla'>
        <h2>Your Accounts</h2>
        <button
          type='button'
          onClick={handleAddNewAccount}
          className='addButton'
        >
          Add New Acount
        </button>
        <div className='accountsWrapper'>
          {accounts.map((element) => (
            <CheckAccountButton
              check={isChecked(element.id)}
              key={element.id}
              data={element}
              child={<AccountForm key={element.id} inputsValue={element} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
