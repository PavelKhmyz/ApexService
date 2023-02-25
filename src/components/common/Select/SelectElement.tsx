import { SelectOption } from './components/SelectOption';

export interface OptionsArrayType {
  data: string;
  value: string;
}

export interface SelectElementProps {
  title: string;
  value: string;
  optionsArray: Array<string | OptionsArrayType>;
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
    <label htmlFor='selectId' className='selectInputLabel'>
      <span>{title}</span>
      <select
        onChange={(event) => handleChangeOption(event)}
        value={value}
        id='selectId'
        disabled={disable}
      >
        {isString
          ? optionsArray.map((key) => <SelectOption key={key as string} data={key as string} />)
          : optionsArray.map((key) => (
              <SelectOption
                key={(key as OptionsArrayType).data}
                data={(key as OptionsArrayType).data}
                value={(key as OptionsArrayType).value}
              />
            ))}
      </select>
    </label>
  );
};
