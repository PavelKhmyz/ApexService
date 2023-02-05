import { RadioButtonProps } from '../../commonTypes';

export const RadioButton = ({
  data,
  child,
  check = false,
}: RadioButtonProps) => {
  const { id, value, changeFunc } = data;
  return (
    <div className='radioButton'>
      <input
        className='radioButtonInput'
        name='platform'
        type='radio'
        id={id}
        value={value}
        checked={check}
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
