import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { changeEmail, changePassword } from '../../redux/reducer/authSlice';
import { Input } from '../common/Input';
import { Logo } from '../common/Logo';
import './signInStyle.scss';
import { ConfirmButton } from './components/ConfirmButton';
import {
  sendLoginRequest,
  sendRegistrationRequest,
} from '../../axios/authRequests';
import { ErrorComponent } from '../home/components/ErrorComponent';
import { loginInputConfig } from './components/componentsConfig';
import { RegistrationBlock } from './components/RegistrationBlock';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = !!useAppSelector((state) => state.auth.accessToken);
  const platform = useAppSelector((state) => state.auth.platform);
  const emailValue = useAppSelector((state) => state.auth.email);
  const passwordValue = useAppSelector((state) => state.auth.password);
  const confirmPassword = useAppSelector((state) => state.auth.passwordConfirm);
  const name = useAppSelector((state) => state.auth.name);
  const [isValid, setIsValid] = useState(false);
  const isHiden = useAppSelector((state) => state.auth.isHiden);
  const error = useAppSelector((state) => state.auth.error);
  const loader = useAppSelector((state) => state.auth.loader);
  const { theme } = useAppSelector((state) => state.user);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(event.target.value));
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePassword(event.target.value));
  };

  useEffect(() => {
    if (auth) {
      navigate('/profile/user');
    }
  }, [auth, navigate]);

  useEffect(() => {
    if (isHiden) {
      if (emailValue && passwordValue) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else if (
      confirmPassword === passwordValue &&
      passwordValue &&
      emailValue
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [confirmPassword, emailValue, isHiden, passwordValue]);

  const registration = () => {
    const regisrationData = {
      email: emailValue,
      password: passwordValue,
      userAccounts: [{ name, platform, id: name + platform, checked: true }],
    };
    sendRegistrationRequest(regisrationData);
  };
  const login = () => {
    const data = {
      email: emailValue,
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
          value={emailValue}
        />
        <Input
          data={loginInputConfig.passwordInput}
          onChangeFunc={(event) => {
            handleChangePassword(event);
          }}
          value={passwordValue}
        />
        <RegistrationBlock isHiden={isHiden} />
        <PropagateLoader color={theme.fontColor} loading={loader} />
        <div className='buttonWrapper'>
          {isHiden ? (
            <ConfirmButton validate={isValid} isLogin requestFunc={login} />
          ) : (
            <ConfirmButton
              validate={isValid}
              isLogin={false}
              requestFunc={registration}
            />
          )}
        </div>
      </div>
      {error && <ErrorComponent data={error} />}
    </div>
  );
};
