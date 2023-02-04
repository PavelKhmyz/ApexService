import { SelectOption } from './SelectOption';

interface SelectElementProps {
  title: string;
  value: string;
  optionsArray: Array<string | any>;
  handleChange: (arg0: React.ChangeEvent<HTMLSelectElement>) => void;
  disable?: boolean;
}

export const SelectElement = ({
  title,
  value,
  optionsArray,
  handleChange,
  disable = false,
}: SelectElementProps) => {
  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(event);
  };
  const isString = typeof optionsArray[0] === 'string';
  return (
    <label htmlFor='selectId' className='inputLabel'>
      <span>{title}</span>
      <select
        onChange={(event) => handleChangeOption(event)}
        value={value}
        id='selectId'
        disabled={disable}
      >
        {isString
          ? optionsArray.map((key) => <SelectOption key={key} data={key} />)
          : optionsArray.map((key) => (
              <SelectOption key={key.data} data={key.data} value={key.value} />
            ))}
      </select>
    </label>
  );
};
