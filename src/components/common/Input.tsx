interface InputProps {
  data: { text: string; type: string; placeholder: string; id: string };
  value: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  showValue?: () => void;
}

export const Input = ({
  data,
  value,
  disabled = false,
  onChange,
  onBlur = () => {},
  showValue = undefined,
}: InputProps) => {
  const { text, type, placeholder, id } = data;

  return (
    <div style={{ position: 'relative', top: 0, left: 0 }} className='inputLabel'>
      {showValue && (
        <button
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            backgroundColor: 'inherit',
          }}
          type='button'
          onClick={showValue}
        >
          show
        </button>
      )}
      <label htmlFor={id}>
        <span>{text}</span>
      </label>
      <input
        id={id}
        className='inputElement'
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        onBlur={onBlur}
      />
    </div>
  );
};
