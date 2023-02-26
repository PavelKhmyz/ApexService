interface RadioInputProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioButtonProps {
  data: RadioInputProps;
  child: JSX.Element;
}

export const RadioButton = ({ data, child }: RadioButtonProps) => {
  const { id, value, onChange } = data;
  return (
    <div className='radioButton'>
      <input
        className='radioButtonInput'
        name='platform'
        type='radio'
        id={id}
        value={value}
        onChange={(event) => {
          onChange(event);
        }}
      />
      <label className='radioButtonLabel' htmlFor={id}>
        {child}
      </label>
    </div>
  );
};
