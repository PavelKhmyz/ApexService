import { useAppSelector, useAppDispatch } from '../../../redux/hooks/hook';
import {
  changePasswordConfirm,
  changeName,
  // changePlatform,
} from '../../../redux/reducer/authSlice';
import { Input } from '../../common/Input';
// import { RadioBlock } from '../../common/radioBlock/RadioBlock';
import { registrationInputConfig } from './componentsConfig';
import { RegistrationBlockProps } from './signInTypes';

export const RegistrationBlock = ({ isHiden }: RegistrationBlockProps) => {
  const confirm = useAppSelector((state) => state.auth.passwordConfirm);
  const name = useAppSelector((state) => state.auth.name);
  const dispatch = useAppDispatch();

  const handleChangeConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePasswordConfirm(event.target.value));
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };

  return (
    <div className='registrationForm' style={isHiden ? { height: '0px' } : { height: '240px' }}>
      <Input
        data={registrationInputConfig.passwordInput}
        onChangeFunc={(event) => {
          handleChangeConfirm(event);
        }}
        value={confirm}
      />
      <Input
        data={registrationInputConfig.nameInput}
        onChangeFunc={(event) => {
          handleChangeName(event);
        }}
        value={name}
      />
      {/* <RadioBlock onChange={changePlatform} /> */}
    </div>
  );
};
