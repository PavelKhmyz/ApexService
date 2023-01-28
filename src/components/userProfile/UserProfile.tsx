import { NavLink, Outlet } from 'react-router-dom';
import './userProfileStyle.scss';

export const UserProfile = () => (
  <div className='userProfileWrapper'>
    <div className='navBar'>
      <NavLink to={'user'}>Profile</NavLink>
      <NavLink to={'settings'}>Settings</NavLink>
      <p>Sign Out</p>
    </div>
    <div className='profileContentWrapper'>
      <Outlet />
    </div>
  </div>
);
