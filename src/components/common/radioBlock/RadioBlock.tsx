import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../redux/hooks/hook';
import { PcLogo } from './components/PcLogo';
import { PsLogo } from './components/PsLogo';
import { RadioButton } from './components/RadioButtons';
import { XboxLogo } from './components/XboxLogo';

interface RadioBlockProps {
  onChange: ActionCreatorWithPayload<string, string>;
}

export const RadioBlock = ({ onChange }: RadioBlockProps) => {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onChange(event.target.value));
  };

  return (
    <div className='radioWrapper'>
      <RadioButton
        child={<XboxLogo />}
        data={{
          id: 'input1',
          value: 'X1',
          changeFunc: handleChange,
        }}
      />
      <RadioButton
        child={<PsLogo />}
        data={{
          id: 'input2',
          value: 'PS4',
          changeFunc: handleChange,
        }}
      />
      <RadioButton
        child={<PcLogo />}
        data={{
          id: 'input3',
          value: 'PC',
          changeFunc: handleChange,
        }}
      />
    </div>
  );
};
