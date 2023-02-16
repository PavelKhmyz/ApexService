import { InputProps } from './commonTypes';

export const Input = ({ data, onChangeFunc, value, ...disabled }: InputProps) => {
  const { text, type, placeholder, id } = data;

  const isDisable = () => {
    if (disabled.disabled) {
      return disabled.disabled;
    }
    return false;
  };

  return (
    <div className='inputLabel'>
      <label htmlFor={id}>
        <span>{text}</span>
      </label>
      <input
        id={id}
        className='inputElement'
        type={type}
        placeholder={placeholder}
        onChange={onChangeFunc}
        value={value}
        disabled={isDisable()}
      />
    </div>
  );
};
