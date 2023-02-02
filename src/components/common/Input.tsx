interface InputProps {
  data: { text: string; type: string; placeholder: string; id: string };
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
}

export const Input = ({
  data,
  onChangeFunc,
  value,
  ...disabled
}: InputProps) => {
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
