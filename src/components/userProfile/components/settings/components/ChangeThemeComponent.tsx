import { useState } from 'react';
import {
  useAppSelector,
  useAppDispatch,
} from '../../../../../redux/hooks/hook';
import { changeTheme } from '../../../../../redux/reducer/userSlice';
import { theme } from './theme';
import { ThemeSelectOption } from './ThemeSelectOption';

export const ChangeThemeComponent = () => {
  const currentTheme = useAppSelector((state) => state.user.theme);
  const [searchValue, setSearchValue] = useState(currentTheme.name);
  const dispatch = useAppDispatch();

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const saveTheme = () => {
    const savedTheme = theme.filter((el) => el.name === searchValue);
    const [actualTheme] = savedTheme;

    dispatch(changeTheme(actualTheme));
  };

  return (
    <div className='changeThemeSelect'>
      <label htmlFor='selectId' className='inputLabel'>
        <span>Select theme:</span>
        <select
          onChange={(event) => handleChangeInputValue(event)}
          value={searchValue}
          id='selectId'
        >
          {theme.map((el) => (
            <ThemeSelectOption key={el.name} data={el} />
          ))}
        </select>
      </label>
      <button type='button' onClick={saveTheme} className='themeSaveButton'>
        Save Theme
      </button>
    </div>
  );
};
