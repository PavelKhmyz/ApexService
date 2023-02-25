import { useState } from "react";

import { PropagateLoader } from "react-spinners";
import { Logo } from "../common/Logo";
import "./SignIn.scss";
import { ValidationErrors } from "./SignIn.types";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "./SignIn.utils";
import { Input } from "./common/Input/Input";
import { InputType } from "./common/common.enums";
import { useAppSelector } from "../../redux/hooks/hook";
import { ConfirmButton } from "./common/ConfirmButton/ConfirmButton";
import {
  sendLoginRequest,
  sendRegistrationRequest,
} from "../../axios/authRequests";

const SignIn = () => {
  const loader = useAppSelector((state) => state.auth.loader);

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [isRegistrationBlockOpen, setIsRegistrationBlockOpen] =
    useState<boolean>(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPasswordValue(event.target.value);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
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

  const handleBlurConfirmPassword = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    const validationError = validateConfirmPassword(
      passwordValue,
      event.target.value
    );

    setValidationErrors((previousState) => ({
      ...previousState,
      confirmPassword: validationError,
    }));
  };

  const handleShowFormClick = () => {
    // прикольное решение, возьми на заметку)
    setIsRegistrationBlockOpen(!isRegistrationBlockOpen);
  };


  const isValidBeforeSubmit = () => {
    const validationErrorsOnSubmit: ValidationErrors = {
      email: validateEmail(emailValue),
      password: validatePassword(passwordValue),
      confirmPassword: "",
    };

    if (isRegistrationBlockOpen) {
      validationErrorsOnSubmit.confirmPassword = validateConfirmPassword(
        passwordValue,
        confirmPasswordValue
      );
    }

    setValidationErrors(validationErrorsOnSubmit);


    // это ошибка - стейт ассайнится не мгновенно
    // следовательно функция будет возращать true с ошибками
    // if (
    //   validationErrors.email ||
    //   validationErrors.password ||
    //   validationErrors.confirmPassword
    // ) {
    //   return false;
    // }


    // поэтому надо проверять из значение константы которую мы как раз добавили в стейт
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
    if (!isValidBeforeSubmit) {
      return;
    }

    if (isRegistrationBlockOpen) {
      const registrationData = {
        email: emailValue,
        password: passwordValue,
        userAccounts: [
          {
            name: nameValue,
            platform: "",
            id: nameValue,
            checked: true,
          },
        ],
      };
      sendRegistrationRequest(registrationData);
    } else {
      const loginData = {
        email: emailValue,
        password: passwordValue,
      };
      sendLoginRequest(loginData);
    }
  };

  return (
    <div className="signInWrapper">
      <div className="inputForm">
        <Logo className="signInlogo" />
        <Input
          inputType={InputType.Email}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
          value={emailValue}
        />
        {validationErrors.email && <p>{validationErrors.email}</p>}
        <Input
          inputType={InputType.Password}
          onChange={handleChangePassword}
          onBlur={handleBlurPassword}
          value={passwordValue}
        />
        {validationErrors.password && <p>{validationErrors.password}</p>}

        {/* этот блок можно вынести в отедльный как у тебя 
        но тогда прокидывать ему все стейты и функции на их изменения
        для того чтобы компонента sign in всегда имела правильные данные    
        */}

        {isRegistrationBlockOpen && (
          <div>
            <div className="registrationForm">
              <Input
                inputType={InputType.ConfirmPassword}
                onChange={handleChangeConfirmPassword}
                value={confirmPasswordValue}
                onBlur={handleBlurConfirmPassword}
              />
              {validationErrors.confirmPassword && (
                <p>{validationErrors.confirmPassword}</p>
              )}
              <Input
                inputType={InputType.PlayerName}
                onChange={handleChangeName}
                value={nameValue}
              />
            </div>
          </div>
        )}
        <PropagateLoader color="white" loading={loader} />
        <div className="buttonWrapper">
          <ConfirmButton
            text={isRegistrationBlockOpen ? "Register" : "Sign In"}
            onClick={handleSubmitClick}
            disabled={
              !!validationErrors.email ||
              !!validationErrors.password ||
              !!validationErrors.confirmPassword
            }
          />
        </div>

        {/* вот так лучше указывать такие значения. можно засунуть их в константу, 
            но ты их нигде кроме этой старнице использовать или менять не будешь,
             так что такое решение оправдано */}
        <p className="haveAnAccount">
          {isRegistrationBlockOpen
            ? "Have an account?"
            : "Don`t have an account?"}
          <button type="button" onClick={handleShowFormClick}>
            {isRegistrationBlockOpen ? "SignIn!" : "Registration!"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
