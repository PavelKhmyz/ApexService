import { PcLogo } from '../../../svg/PcLogo';
import { PsLogo } from '../../../svg/PsLogo';
import { XboxLogo } from '../../../svg/XboxLogo';
import { RadioButton } from './components/RadioButton';

interface RadioBlockProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const RadioBlock = ({ onChange }: RadioBlockProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='radioWrapper'>
      <RadioButton
        child={<XboxLogo />}
        data={{
          id: 'input1',
          value: 'X1',
          onChange: handleChange,
        }}
      />
      <RadioButton
        child={<PsLogo />}
        data={{
          id: 'input2',
          value: 'PS4',
          onChange: handleChange,
        }}
      />
      <RadioButton
        child={<PcLogo />}
        data={{
          id: 'input3',
          value: 'PC',
          onChange: handleChange,
        }}
      />
    </div>
  );
};
