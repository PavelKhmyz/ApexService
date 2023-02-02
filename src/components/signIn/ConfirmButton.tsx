import { useAppDispatch } from '../../redux/hooks/hook';
import { setIsHiden } from '../../redux/reducer/authSlice';

const buttonVariable = {
  loginButton: {
    confirmTitle: 'Sign In',
    changeTitle: 'Registration!',
    changeMessage: 'Didn`t have an account?',
  },
  registrationButton: {
    confirmTitle: 'Register',
    changeTitle: 'SignIn!',
    changeMessage: 'Have an account?',
  },
};

interface ConfirmButtonProps {
  isLogin: boolean;
  requestFunc: () => void;
  validate: boolean;
}

export const ConfirmButton = ({
  isLogin,
  requestFunc,
  validate,
}: ConfirmButtonProps) => {
  const dispatch = useAppDispatch();
  const buttonType = () =>
    isLogin ? buttonVariable.loginButton : buttonVariable.registrationButton;

  const showRegistrationForm = () => {
    dispatch(setIsHiden());
  };
  return (
    <>
      <button
        disabled={validate}
        type='button'
        className='signInButton'
        onClick={requestFunc}
      >
        {buttonType().confirmTitle}
      </button>
      <p className='haveAnAccount'>
        {buttonType().changeMessage}
        <button type='button' onClick={showRegistrationForm}>
          {buttonType().changeTitle}
        </button>
      </p>
    </>
  );
};
