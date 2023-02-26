import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/hook';
import { changeName } from '../SignIn.slice';
import { Input } from '../../common/Input';
import { RadioBlock } from '../../common/RadioBlock/RadioBlock';

export interface RegistrationBlockProps {
  isHiden: boolean;
  confirmValue: string;
  isValid: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  changeConfirm: React.Dispatch<React.SetStateAction<string>>;
  changePlatform: React.Dispatch<React.SetStateAction<string>>;
}

export const RegistrationBlock = ({
  isHiden,
  confirmValue,
  isValid,
  onBlur,
  changeConfirm,
  changePlatform,
}: RegistrationBlockProps) => {
  const { name } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [passwordType, setPasswordType] = useState('password');

  const handleShowPassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
  };
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
          type: passwordType,
          placeholder: 'Enter Password again',
        }}
        onChange={(event) => {
          handleChangeConfirm(event);
        }}
        value={confirmValue}
        onBlur={onBlur}
        showValue={handleShowPassword}
      />
      {isValid && <p>{isValid}</p>}
      <Input
        data={{
          id: 'signInInput4',
          text: 'Player Name:',
          type: 'text',
          placeholder: 'Name',
        }}
        onChange={(event) => {
          handleChangeName(event);
        }}
        value={name}
      />
      <RadioBlock onChange={changePlatform} />
    </div>
  );
};
