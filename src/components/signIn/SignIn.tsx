import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { changeEmail } from '../../redux/reducer/authSlice';
import { Input } from '../common/Input';
import { Logo } from '../../svg/Logo';
import './SignIn.style.scss';
import { sendLoginRequest, sendRegistrationRequest } from '../../axios/authRequests';
import { RegistrationBlock } from './components/RegistrationBlock';
import { ErrorComponent } from '../common/ErrorComponent';
import { validateConfirmPassword, validateEmail, validatePassword } from './SignIn.utils';

interface ValidationErrors {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { accessToken, email, name, error, loader } = useAppSelector((state) => state.auth);
  const [platform, setPlatform] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isHiden, setIsHiden] = useState(true);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(event.target.value));
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };
  const showRegistrationForm = () => {
    setIsHiden((prev) => !prev);
  };
  const handleBlurEmail = (event: React.FocusEvent<HTMLInputElement>) => {
    const validationError = validateEmail(event.target.value);
    setValidationErrors((previousState) => ({
      ...previousState,
      email: validationError,
    }));
  };
  const handleBlurPassword = (event: React.FocusEvent<HTMLInputElement>) => {
    const validationError = validatePassword(event.target.value);
    setValidationErrors((previousState) => ({
      ...previousState,
      password: validationError,
    }));
  };
  const isValidBeforeSubmit = () => {
    const validationErrorsOnSubmit: ValidationErrors = {
      email: validateEmail(email),
      password: validatePassword(passwordValue),
      confirmPassword: '',
    };
    if (isHiden) {
      validationErrorsOnSubmit.confirmPassword = validateConfirmPassword(
        passwordValue,
        confirmPassword
      );
    }

    setValidationErrors(validationErrorsOnSubmit);

    if (
      validationErrorsOnSubmit.email ||
      validationErrorsOnSubmit.password ||
      validationErrorsOnSubmit.confirmPassword
    ) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (accessToken) {
      navigate('/profile/user');
    }
  }, [accessToken, navigate]);

  const handleSubmitClick = () => {
    if (!isValidBeforeSubmit) {
      return;
    }
    if (isHiden) {
      const loginData = {
        email,
        password: passwordValue,
      };
      sendLoginRequest(loginData);
    } else {
      const regisrationData = {
        email,
        password: passwordValue,
        userAccounts: [{ name, platform, id: name + platform, checked: true }],
      };
      sendRegistrationRequest(regisrationData);
    }
  };

  return (
    <div className='signInWrapper'>
      <div className='inputForm'>
        <Logo className='signInlogo' />
        <Input
          data={{
            id: 'signInInput1',
            text: 'E-mail:',
            type: 'text',
            placeholder: 'Enter your E-mail',
          }}
          value={email}
          onChangeFunc={(event) => {
            handleChangeEmail(event);
          }}
          onBlur={handleBlurEmail}
        />
        {validationErrors.email && <p>{validationErrors.email}</p>}
        <Input
          data={{
            id: 'signInInput2',
            text: 'Password:',
            type: 'password',
            placeholder: 'Enter your Password',
          }}
          value={passwordValue}
          onChangeFunc={(event) => {
            handleChangePassword(event);
          }}
          onBlur={handleBlurPassword}
        />
        {validationErrors.email && <p>{validationErrors.password}</p>}
        <RegistrationBlock
          isHiden={isHiden}
          changeConfirm={setConfirmPassword}
          confirmValue={confirmPassword}
          changePlatform={setPlatform}
        />
        <PropagateLoader color='white' loading={loader} />
        <div className='buttonWrapper'>
          <button type='button' className='signInButton' onClick={handleSubmitClick}>
            {isHiden ? 'Sign In' : 'Register'}
          </button>
          <p className='haveAnAccount'>
            {isHiden ? 'Didn`t have an account?' : 'Have an account?'}
            <button type='button' onClick={showRegistrationForm}>
              {isHiden ? 'Registration!' : 'SignIn!'}
            </button>
          </p>
        </div>
      </div>
      {error && <ErrorComponent message={error} />}
    </div>
  );
};
