import { NewsResponseType } from '../../redux/initialStates/Types/newsInitialStateType';

export interface NewsBlockProps {
  newsEl: NewsResponseType;
}
export interface LogoProps {
  className: string;
}
export interface InputProps {
  data: { text: string; type: string; placeholder: string; id: string };
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
}
export interface SelectElementProps {
  title: string;
  value: string;
  optionsArray: Array<string | OptionsArrayType>;
  handleChange: (arg0: React.ChangeEvent<HTMLSelectElement>) => void;
  disable?: boolean;
}

export interface OptionsArrayType {
  data: string;
  value: string;
}
export interface SelectOptionProps {
  data: string;
  value?: string;
}
export interface RadioBlockProps {
  fromAuth: boolean;
}
export interface RadioInputProps {
  id: string;
  value: string;
  changeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface RadioButtonProps {
  data: RadioInputProps;
  child: JSX.Element;
  check?: boolean;
}
