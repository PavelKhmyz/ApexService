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
export interface SelectOptionProps {
  data: string;
  value?: string;
}
