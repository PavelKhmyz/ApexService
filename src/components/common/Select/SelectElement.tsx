import { SelectOption } from './components/SelectOption';

export interface OptionsArrayType {
  data: string;
  value: string;
}

export interface SelectElementProps {
  title: string;
  value: string;
  optionsArray: Array<string | OptionsArrayType>;
  disable?: boolean;
  onChange: (arg0: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectElement = ({
  title,
  value,
  optionsArray,
  onChange,
  disable = false,
}: SelectElementProps) => {
  const isString = typeof optionsArray[0] === 'string';
  return (
    <label htmlFor='selectId' className='selectInputLabel'>
      <span>{title}</span>
      <select onChange={(event) => onChange(event)} value={value} id='selectId' disabled={disable}>
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
