interface InputProps {
  id: string;
  value: string;
  changeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface RadioButtonProps {
  data: InputProps;
  child: JSX.Element;
}

export const RadioButton = ({ data, child }: RadioButtonProps) => {
  const { id, value, changeFunc } = data;

  return (
    <div className='radioButton'>
      <input
        className='radioButtonInput'
        name='platform'
        type='radio'
        id={id}
        value={value}
        onChange={(event) => {
          changeFunc(event);
        }}
      />
      <label className='radioButtonLabel' htmlFor={id}>
        {child}
      </label>
    </div>
  );
};
