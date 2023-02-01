import { NavLink, Outlet } from 'react-router-dom';
import { refreshToken, requests } from '../../axios/requests';
import { useAppSelector } from '../../redux/hooks/hook';
import './userProfileStyle.scss';

export const UserProfile = () => {
  const token = useAppSelector((state) => state.auth.accessToken);
  const refToken = useAppSelector((state) => state.auth.refreshToken);
  const requestToken = `Bearer ${token}`;

  const refreshRequest = async () => {
    if (refToken) {
      const response = await refreshToken(refToken);
      console.log(response);
    }
  };

  const logoutRequest = async () => {
    const response = await requests().logoutRequest();
    // const response = await requests().refreshToken();
    console.log(response);
  };
  const sendRequestUsers = async () => {
    const response = await requests().getUsers(requestToken);
    // const response = await requests().refreshToken();
    console.log(response);
  };
  return (
    <div className='userProfileWrapper'>
      <div className='navBar'>
        <NavLink to={'user'}>Profile</NavLink>
        <NavLink to={'settings'}>Settings</NavLink>
        <p>Sign Out</p>
        <button type='button' onClick={refreshRequest}>
          {' '}
          refresh
        </button>
        <button type='button' onClick={sendRequestUsers}>
          {' '}
          users
        </button>
        <button type='button' onClick={logoutRequest}>
          {' '}
          logout
        </button>
      </div>
      <div className='profileContentWrapper'>
        <Outlet />
      </div>
    </div>
  );
};
