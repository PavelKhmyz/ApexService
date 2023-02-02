import { useAppDispatch } from '../../../../../redux/hooks/hook';
import { selectUser } from '../../../../../redux/reducer/userSlice';

interface InputProps {
  name: string;
  id: string;
  platform: string;
}
interface RadioButtonProps {
  data: InputProps;
  child: JSX.Element;
  check: boolean;
}

export const CheckAccountButton = ({
  data,
  child,
  check,
}: RadioButtonProps) => {
  const dispatch = useAppDispatch();
  const { id } = data;

  const handleChangePlatform = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectUser(event.target.value));
  };
  return (
    <div className='radioButton'>
      <input
        className='radioButtonInput'
        name='account'
        type='radio'
        id={id}
        value={id}
        onChange={(event) => {
          handleChangePlatform(event);
        }}
        checked={check}
      />
      <label className='radioButtonLabel' htmlFor={id}>
        {child}
      </label>
    </div>
  );
};
