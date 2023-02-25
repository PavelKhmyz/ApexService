import { useAppSelector, useAppDispatch } from '../../../redux/hooks/hook';
import { changeName } from '../../../redux/reducer/authSlice';
import { Input } from '../../common/Input';
import { RadioBlock } from '../../common/RadioBlock/RadioBlock';

export interface RegistrationBlockProps {
  isHiden: boolean;
  confirmValue: string;
  changeConfirm: React.Dispatch<React.SetStateAction<string>>;
  changePlatform: React.Dispatch<React.SetStateAction<string>>;
}

export const RegistrationBlock = ({
  isHiden,
  confirmValue,
  changeConfirm,
  changePlatform,
}: RegistrationBlockProps) => {
  const { name } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleChangeConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeConfirm(event.target.value);
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className='registrationForm' style={isHiden ? { height: '0px' } : { height: '240px' }}>
      <Input
        data={{
          id: 'signInInput3',
          text: 'Confirm:',
          type: 'password',
          placeholder: 'Enter Password again',
        }}
        onChangeFunc={(event) => {
          handleChangeConfirm(event);
        }}
        value={confirmValue}
      />
      <Input
        data={{
          id: 'signInInput4',
          text: 'Player Name:',
          type: 'text',
          placeholder: 'Name',
        }}
        onChangeFunc={(event) => {
          handleChangeName(event);
        }}
        value={name}
      />
      <RadioBlock onChange={changePlatform} />
    </div>
  );
};
