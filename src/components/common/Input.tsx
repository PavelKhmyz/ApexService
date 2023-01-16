interface InputProps {
  text: string;
  type: string;
  placeholder: string;
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input = (props: InputProps) => {
  return (
    <label className='inputLabel'>
      <span>{props.text}</span>
      <input
        className='inputElement'
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChangeFunc}
        value={props.value}
      />
    </label>
  );
};
