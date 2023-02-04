import { useState } from 'react';
import {
  useAppSelector,
  useAppDispatch,
} from '../../../../../redux/hooks/hook';
import { changeTheme } from '../../../../../redux/reducer/userSlice';
import { SelectElement } from '../../../../common/select/SelectElement';
import { theme } from './theme';

export const ChangeThemeComponent = () => {
  const currentTheme = useAppSelector((state) => state.user.theme);
  const [searchValue, setSearchValue] = useState(currentTheme.name);
  const dispatch = useAppDispatch();
  const themeKeys = Object.keys(theme);

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const saveTheme = () => {
    const savedTheme = theme[searchValue];
    dispatch(changeTheme(savedTheme));
  };

  return (
    <div className='changeThemeSelect'>
      <SelectElement
        title={'Select theme:'}
        value={searchValue}
        optionsArray={themeKeys}
        handleChange={handleChangeInputValue}
      />
      <button type='button' onClick={saveTheme} className='themeSaveButton'>
        Save Theme
      </button>
    </div>
  );
};
