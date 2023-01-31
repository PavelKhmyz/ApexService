import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requests } from '../../axios/requests';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import {
  addAccessToken,
  setEmail,
  setPassword,
} from '../../redux/reducer/authSlice';
import { Input } from '../common/Input';
import { Logo } from '../common/Logo';
import { PcLogo } from '../home/components/Title/PcLogo';
import { PsLogo } from '../home/components/Title/PsLogo';
import { RadioButton } from '../home/components/Title/RadioButtons';
import { XboxLogo } from '../home/components/Title/XboxLogo';
import './signInStyle.scss';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const emailValue = useAppSelector((state) => state.auth.email);
  const platform = useAppSelector((state) => state.playerStats.platform);
  const passwordValue = useAppSelector((state) => state.auth.password);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isHiden, setIsHiden] = useState(true);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(event.target.value));
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (confirmPassword === passwordValue && passwordValue) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [confirmPassword, passwordValue]);

  const showRegistrationForm = () => {
    setIsHiden((prev) => !prev);
  };

  const sendRegistrationRequest = async () => {
    const data = {
      email: emailValue,
      password: passwordValue,
      playerName: name,
      userPlatform: platform,
    };
    const response = await requests().registrationRequest(data);
    if (response.data.accessToken) {
      navigate('/profile/user');
    }
    dispatch(addAccessToken(response.data.accessToken));
  };

  const sendLoginRequest = async () => {
    const data = {
      email: emailValue,
      password: passwordValue,
    };
    const response = await requests().loginRequest(data);
    if (response.data.accessToken) {
      navigate('/profile/user');
    }
    dispatch(addAccessToken(response.data.accessToken));
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
        <div
          className='registrationForm'
          style={isHiden ? { height: '0px' } : { height: '240px' }}
        >
          <Input
            id='signInInput3'
            text={'Confirm:'}
            type={'password'}
            placeholder={'Enter Password again'}
            onChangeFunc={(event) => {
              handleChangeConfirmPassword(event);
            }}
            value={confirmPassword}
          />
          <Input
            id='signInInput4'
            text={'Player Name:'}
            type={'text'}
            placeholder={'Name'}
            onChangeFunc={(event) => {
              handleChangeName(event);
            }}
            value={name}
          />
          <div className='radioWrapper'>
            <RadioButton
              child={<XboxLogo />}
              data={{ id: 'input1', value: 'X1' }}
            />
            <RadioButton
              child={<PsLogo />}
              data={{ id: 'input2', value: 'PS4' }}
            />
            <RadioButton
              child={<PcLogo />}
              data={{ id: 'input3', value: 'PC' }}
            />
          </div>
        </div>
        <div className='buttonWrapper'>
          {isHiden ? (
            <>
              <button
                type='button'
                className='signInButton'
                onClick={sendLoginRequest}
              >
                Sign in
              </button>
              <p className='haveAnAccount'>
                Didn`t have an account?{' '}
                <button type='button' onClick={showRegistrationForm}>
                  Registration!
                </button>
              </p>
            </>
          ) : (
            <>
              <button
                type='button'
                className='signInButton'
                disabled={!isValid}
                onClick={sendRegistrationRequest}
              >
                Register
              </button>
              <p className='haveAnAccount'>
                Have an account?{' '}
                <button type='button' onClick={showRegistrationForm}>
                  SignIn!
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
