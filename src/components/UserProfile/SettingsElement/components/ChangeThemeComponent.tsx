import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks/hook';
import { SelectElement } from '../../../common/Select/SelectElement';
import { theme } from '../../../common/Theme';
import { changeTheme } from '../../UserProfile.slice';

export const ChangeThemeComponent = () => {
  const currentTheme = useAppSelector((state) => state.user.theme);
  const [searchValue, setSearchValue] = useState(currentTheme.name);
  const dispatch = useAppDispatch();
  const themeKeys = Object.keys(theme);

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    dispatch(changeTheme(theme[searchValue]));
  }, [dispatch, searchValue]);

  return (
    <div className='changeThemeSelect'>
      <SelectElement
        title={'Select theme:'}
        value={searchValue}
        optionsArray={themeKeys}
        onChange={handleChangeInputValue}
      />
    </div>
  );
};
