interface InputProps {
  data: { text: string; type: string; placeholder: string; id: string };
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({
  data,
  onChangeFunc,
  onBlur = () => {},
  value,
  disabled = false,
}: InputProps) => {
  const { text, type, placeholder, id } = data;

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
        disabled={disabled}
        onBlur={onBlur}
      />
    </div>
  );
};
