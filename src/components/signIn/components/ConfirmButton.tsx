import { buttonVariable } from './componentsConfig';

export interface ConfirmButtonProps {
  requestFunc: () => void;
  showForm: React.Dispatch<React.SetStateAction<boolean>>;
  validate: boolean;
  isLogin: boolean;
}

export const ConfirmButton = ({ isLogin, requestFunc, validate, showForm }: ConfirmButtonProps) => {
  const buttonType = () =>
    isLogin ? buttonVariable.loginButton : buttonVariable.registrationButton;

  const showRegistrationForm = () => {
    showForm((prev) => !prev);
  };
  return (
    <>
      <button disabled={validate} type='button' className='signInButton' onClick={requestFunc}>
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
