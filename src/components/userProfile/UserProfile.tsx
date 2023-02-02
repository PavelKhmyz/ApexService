import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { requests } from '../../axios/requests';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hook';
import { logout } from '../../redux/reducer/authSlice';
import './userProfileStyle.scss';

export const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.auth.email);
  const token = useAppSelector((state) => state.auth.accessToken);
  const refToken = useAppSelector((state) => state.auth.refreshToken);
  const accounts = useAppSelector((state) => state.user.playerData);
  const requestToken = `Bearer ${token}`;

  const refreshRequest = async () => {
    if (refToken) {
      await requests().refreshToken(refToken);
    }
  };

  const handleLogout = async () => {
    await requests().logoutRequest(requestToken);
    window.sessionStorage.removeItem('refreshToken');
    navigate(-1);
    dispatch(logout());
  };
  const sendRequestUsers = async () => {
    const data = {
      email,
      userAccounts: accounts,
    };
    const response = await requests().sendAccounts(data);
    console.log(response);
  };

  return (
    <div className='userProfileWrapper'>
      <div className='navBar'>
        <NavLink to={'user'}>Profile</NavLink>
        <NavLink to={'settings'}>Settings</NavLink>
        <button className='logoutButton' type='button' onClick={handleLogout}>
          Sign Out
        </button>
        <button type='button' onClick={refreshRequest}>
          {' '}
          refresh
        </button>
        <button type='button' onClick={sendRequestUsers}>
          {' '}
          accounts
        </button>
      </div>
      <div className='profileContentWrapper'>
        <Outlet />
      </div>
    </div>
  );
};
