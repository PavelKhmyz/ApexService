import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { changeEmail } from '../../redux/reducer/authSlice';
import { Input } from '../common/Input';
import { Logo } from '../../svg/Logo';
import './signInStyle.scss';
import { ConfirmButton } from './components/ConfirmButton';
import { sendLoginRequest, sendRegistrationRequest } from '../../axios/authRequests';
import { loginInputConfig } from './components/componentsConfig';
import { RegistrationBlock } from './components/RegistrationBlock';
import { ErrorComponent } from '../common/ErrorComponent';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { accessToken, email, name, error, loader } = useAppSelector((state) => state.auth);
  const [platform, setPlatform] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isHiden, setIsHiden] = useState(true);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(event.target.value));
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  useEffect(() => {
    if (accessToken) {
      navigate('/profile/user');
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    if (isHiden) {
      if (email && passwordValue) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else if (confirmPassword === passwordValue && passwordValue && email) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [confirmPassword, email, isHiden, passwordValue]);

  const registration = () => {
    const regisrationData = {
      email,
      password: passwordValue,
      userAccounts: [{ name, platform, id: name + platform, checked: true }],
    };
    sendRegistrationRequest(regisrationData);
  };
  const login = () => {
    const data = {
      email,
      password: passwordValue,
    };
    sendLoginRequest(data);
  };

  return (
    <div className='signInWrapper'>
      <div className='inputForm'>
        <Logo className='signInlogo' />
        <Input
          data={loginInputConfig.emailInput}
          onChangeFunc={(event) => {
            handleChangeEmail(event);
          }}
          value={email}
        />
        <Input
          data={loginInputConfig.passwordInput}
          onChangeFunc={(event) => {
            handleChangePassword(event);
          }}
          value={passwordValue}
        />
        <RegistrationBlock
          isHiden={isHiden}
          changeConfirm={setConfirmPassword}
          confirmValue={confirmPassword}
          changePlatform={setPlatform}
        />
        <PropagateLoader color='white' loading={loader} />
        <div className='buttonWrapper'>
          {isHiden ? (
            <ConfirmButton validate={isValid} isLogin requestFunc={login} showForm={setIsHiden} />
          ) : (
            <ConfirmButton
              validate={isValid}
              isLogin={false}
              requestFunc={registration}
              showForm={setIsHiden}
            />
          )}
        </div>
      </div>
      {error && <ErrorComponent message={error} />}
    </div>
  );
};
