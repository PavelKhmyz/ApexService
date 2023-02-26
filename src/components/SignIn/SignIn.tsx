import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { changeEmail } from './SignIn.slice';
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
  const [isOpenRegistration, setIsOpenRegistration] = useState(true);
  const [passwordType, setPasswordType] = useState('password');
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
    setIsOpenRegistration((prev) => !prev);
  };
  const handleShowPassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
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
  const handleBlurConfirmPassword = (event: React.FocusEvent<HTMLInputElement>) => {
    const validationError = validateConfirmPassword(passwordValue, event.target.value);
    setValidationErrors((previousState) => ({
      ...previousState,
      confirmPassword: validationError,
    }));
  };
  const isValidBeforeSubmit = () => {
    const validationErrorsOnSubmit: ValidationErrors = {
      email: validateEmail(email),
      password: validatePassword(passwordValue),
      confirmPassword: '',
    };
    if (!isOpenRegistration) {
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
  const handleSubmitClick = () => {
    if (!isValidBeforeSubmit()) {
      return;
    }
    if (isOpenRegistration) {
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

  useEffect(() => {
    if (accessToken) {
      navigate('/profile/user');
    }
  }, [accessToken, navigate]);

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
          onChange={(event) => {
            handleChangeEmail(event);
          }}
          onBlur={handleBlurEmail}
        />
        {validationErrors.email && <p>{validationErrors.email}</p>}
        <Input
          data={{
            id: 'signInInput2',
            text: 'Password:',
            type: passwordType,
            placeholder: 'Enter your Password',
          }}
          value={passwordValue}
          onChange={(event) => {
            handleChangePassword(event);
          }}
          onBlur={handleBlurPassword}
          showValue={handleShowPassword}
        />
        {validationErrors.password && <p>{validationErrors.password}</p>}
        <RegistrationBlock
          isHiden={isOpenRegistration}
          changeConfirm={setConfirmPassword}
          confirmValue={confirmPassword}
          changePlatform={setPlatform}
          onBlur={handleBlurConfirmPassword}
          isValid={validationErrors.confirmPassword}
        />
        <PropagateLoader color='white' loading={loader} />
        <div className='buttonWrapper'>
          <button type='button' className='signInButton' onClick={handleSubmitClick}>
            {isOpenRegistration ? 'Sign In' : 'Register'}
          </button>
          <p className='haveAnAccount'>
            {isOpenRegistration ? 'Didn`t have an account?' : 'Have an account?'}
            <button type='button' onClick={showRegistrationForm}>
              {isOpenRegistration ? 'Registration!' : 'SignIn!'}
            </button>
          </p>
        </div>
      </div>
      {error && <ErrorComponent message={error} />}
    </div>
  );
};
