import { useAppDispatch } from '../../../../redux/hooks/hook';
import { addPlatform } from '../../../../redux/reducer/playerStatsSlice';

interface InputProps {
  id: string;
  value: string;
}
interface RadioButtonProps {
  data: InputProps;
  child: JSX.Element;
}

export const RadioButton = ({ data, child }: RadioButtonProps) => {
  const dispatch = useAppDispatch();
  const { id, value } = data;

  const handleChangePlatform = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addPlatform(event.target.value));
  };
  return (
    <div className='radioButton'>
      <input
        className='radioButtonInput'
        name='platform'
        type='radio'
        id={id}
        value={value}
        onChange={(event) => {
          handleChangePlatform(event);
        }}
      />
      <label className='radioButtonLabel' htmlFor={id}>
        {child}
      </label>
    </div>
  );
};
