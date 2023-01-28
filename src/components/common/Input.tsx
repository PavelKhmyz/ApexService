interface InputProps {
  text: string;
  type: string;
  placeholder: string;
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
  disabled?: boolean;
}

export const Input = ({
  text,
  type,
  placeholder,
  onChangeFunc,
  value,
  id,
  ...disabled
}: InputProps) => {
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
