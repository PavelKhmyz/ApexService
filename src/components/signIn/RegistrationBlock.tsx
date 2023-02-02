import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import {
  changeName,
  changePasswordConfirm,
} from '../../redux/reducer/authSlice';
import { Input } from '../common/Input';
import { RadioBlock } from '../common/radioBlock/RadioBlock';

const inputConfig = {
  passwordInput: {
    id: 'signInInput3',
    text: 'Confirm:',
    type: 'password',
    placeholder: 'Enter Password again',
  },
  nameInput: {
    id: 'signInInput4',
    text: 'Player Name:',
    type: 'text',
    placeholder: 'Name',
  },
};

interface RegistrationBlockProps {
  isHiden: boolean;
}

export const RegistrationBlock = ({ isHiden }: RegistrationBlockProps) => {
  const confirm = useAppSelector((state) => state.auth.passwordConfirm);
  const name = useAppSelector((state) => state.auth.name);
  const dispatch = useAppDispatch();

  const handleChangeConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePasswordConfirm(event.target.value));
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div
      className='registrationForm'
      style={isHiden ? { height: '0px' } : { height: '240px' }}
    >
      <Input
        data={inputConfig.passwordInput}
        onChangeFunc={(event) => {
          handleChangeConfirm(event);
        }}
        value={confirm}
      />
      <Input
        data={inputConfig.nameInput}
        onChangeFunc={(event) => {
          handleChangeName(event);
        }}
        value={name}
      />
      <RadioBlock fromAuth />
    </div>
  );
};
