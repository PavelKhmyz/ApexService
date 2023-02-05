import { NavLink } from 'react-router-dom';
import './header.style.scss';
import { Logo } from '../common/Logo';
import { useAppSelector } from '../../redux/hooks/hook';
import { LinkElement } from './components/LinkElement';

export const Header = () => {
  const auth = !!useAppSelector((state) => state.auth.accessToken);

  return (
    <div className='headerContainer'>
      <NavLink to={'/'}>
        <Logo className={'logo'} />
      </NavLink>
      <div className='navigationContainer'>
        <LinkElement path='/maps' title='Map Rotation' />
        <LinkElement path='/server' title='Server Status' />
        {auth ? (
          <LinkElement path='/profile/user' title='Profile' />
        ) : (
          <LinkElement path='/signIn' title='Sign In' />
        )}
      </div>
    </div>
  );
};
