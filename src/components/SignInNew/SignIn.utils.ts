import {
  VALIDATION_ERRORS,
  emailRegex,
  passwordRegex,
} from "./SignIn.constants";

export const validateEmail = (email: string) => {
  if (email.match(emailRegex)) {
    return "";
  }

  return VALIDATION_ERRORS.EMAIL;
};

export const validatePassword = (password: string) => {
  if (password.match(passwordRegex)) {
    return "";
  }

  return VALIDATION_ERRORS.PASSWORD;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  if (password === confirmPassword) {
    return "";
  }

  return VALIDATION_ERRORS.CONFIRM_PASSWORD;
};
