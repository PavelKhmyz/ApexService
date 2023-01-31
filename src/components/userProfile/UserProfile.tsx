import { NavLink, Outlet } from 'react-router-dom';
import { serverRequests } from '../../axios/requests';
import { useAppSelector } from '../../redux/hooks/hook';
import './userProfileStyle.scss';

export const UserProfile = () => {
  const token = useAppSelector((state) => state.auth.accessToken);
  const requestToken = `Bearer ${token}`;
  const sendRequest = async () => {
    const response = await serverRequests().getUsers(requestToken);
    console.log(response);
  };
  return (
    <div className='userProfileWrapper'>
      <div className='navBar'>
        <NavLink to={'user'}>Profile</NavLink>
        <NavLink to={'settings'}>Settings</NavLink>
        <p>Sign Out</p>
        <button type='button' onClick={sendRequest}>
          {' '}
          bla
        </button>
      </div>
      <div className='profileContentWrapper'>
        <Outlet />
      </div>
    </div>
  );
};
