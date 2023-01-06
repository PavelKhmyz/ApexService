import { NavLink } from 'react-router-dom';
import './header.style.css';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <div className='headerContainer'>
      <NavLink to={'/'}>
        <Logo />
      </NavLink>
      <div className='navigationContainer'>
        <NavLink className='navigationLink' to={'/maps'}>
          Map Rotation
        </NavLink>
        <NavLink className='navigationLink' to={'/server'}>
          Server Status
        </NavLink>
        <NavLink className='navigationLink' to={'/signIn'}>
          Sign In
        </NavLink>
      </div>
    </div>
  );
};
