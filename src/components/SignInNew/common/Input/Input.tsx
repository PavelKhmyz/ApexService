import { inputDataByType } from "../common.constants";
import { InputType } from "../common.enums";

interface InputProps {
  inputType: InputType;
  value: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({
  inputType,
  value,
  disabled = false,
  onChange,
  onBlur = () => {},
}: InputProps) => {
  const {id, text, placeholder, type} = inputDataByType[inputType];
  return (
    <div className="inputLabel">
      <label htmlFor={id}>
        <span>{text}</span>
      </label>
      <input
        id={id}
        className="inputElement"
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
