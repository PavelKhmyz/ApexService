import { useAppDispatch } from '../../../redux/hooks/hook';
import { changePlatform } from '../../../redux/reducer/authSlice';
import { addPlatform } from '../../../redux/reducer/playerStatsSlice';
import { PcLogo } from './PcLogo';
import { PsLogo } from './PsLogo';
import { RadioButton } from './RadioButtons';
import { XboxLogo } from './XboxLogo';

interface RadioBlockProps {
  fromAuth: boolean;
}

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
