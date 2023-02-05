import { useAppDispatch } from '../../../redux/hooks/hook';
import { changePlatform } from '../../../redux/reducer/authSlice';
import { addPlatform } from '../../../redux/reducer/playerStatsSlice';
import { RadioBlockProps } from '../commonTypes';
import { PcLogo } from './components/PcLogo';
import { PsLogo } from './components/PsLogo';
import { RadioButton } from './components/RadioButtons';
import { XboxLogo } from './components/XboxLogo';

export const RadioBlock = ({ fromAuth }: RadioBlockProps) => {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (fromAuth) {
      dispatch(changePlatform(event.target.value));
    } else {
      dispatch(addPlatform(event.target.value));
    }
  };
  return (
    <div className='radioWrapper'>
      <RadioButton
        child={<XboxLogo />}
        data={{ id: 'input1', value: 'X1', changeFunc: handleChange }}
      />
      <RadioButton
        child={<PsLogo />}
        data={{ id: 'input2', value: 'PS4', changeFunc: handleChange }}
      />
      <RadioButton
        child={<PcLogo />}
        data={{ id: 'input3', value: 'PC', changeFunc: handleChange }}
      />
    </div>
  );
};
