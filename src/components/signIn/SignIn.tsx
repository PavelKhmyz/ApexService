import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { setEmail, setPassword } from '../../redux/reducer/userSlice';
import { Input } from '../common/Input';
import { Logo } from '../common/Logo';
import './signInStyle.scss';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const emailValue = useAppSelector((state) => state.user.email);
  const passwordValue = useAppSelector((state) => state.user.password);
  const navigate = useNavigate();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(event.target.value));
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };

  const handleConfirm = () => {
    navigate('/profile/user');
  };

  return (
    <div className='signInWrapper'>
      <div className='inputForm'>
        <Logo className='signInlogo' />
        <Input
          id='signInInput1'
          text={'E-mail:'}
          type={'text'}
          placeholder={'Enter your E-mail'}
          onChangeFunc={(event) => {
            handleChangeEmail(event);
          }}
          value={emailValue}
        />
        <Input
          id='signInInput2'
          text={'Password:'}
          type={'password'}
          placeholder={'Enter your Password'}
          onChangeFunc={(event) => {
            handleChangePassword(event);
          }}
          value={passwordValue}
        />
        <button type='button' className='signInButton' onClick={handleConfirm}>
          Sign in
        </button>
      </div>
    </div>
  );
};
