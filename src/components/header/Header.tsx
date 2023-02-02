import { NavLink } from 'react-router-dom';
import './header.style.scss';
import { Logo } from '../common/Logo';
import { useAppSelector } from '../../redux/hooks/hook';

export const Header = () => {
  const auth = !!useAppSelector((state) => state.auth.accessToken);
  const activeStyle = { textDecoration: 'underline' };
  const isActiveLink = (isActive: boolean) =>
    isActive ? activeStyle : undefined;

  return (
    <div className='headerContainer'>
      <NavLink to={'/'}>
        <Logo className={'logo'} />
      </NavLink>
      <div className='navigationContainer'>
        <NavLink
          style={({ isActive }) => isActiveLink(isActive)}
          className='navigationLink'
          to={'/maps'}
        >
          Map Rotation
        </NavLink>
        <NavLink
          style={({ isActive }) => isActiveLink(isActive)}
          className='navigationLink'
          to={'/server'}
        >
          Server Status
        </NavLink>
        {auth ? (
          <NavLink
            style={({ isActive }) => isActiveLink(isActive)}
            className='navigationLink'
            to={'/profile/user'}
          >
            Profile
          </NavLink>
        ) : (
          <NavLink
            style={({ isActive }) => isActiveLink(isActive)}
            className='navigationLink'
            to={'/signIn'}
          >
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};
