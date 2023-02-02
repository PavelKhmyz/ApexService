import { NavLink, Outlet } from 'react-router-dom';
import { logoutRequest, updateDb } from '../../axios/authRequests';
import { useAppSelector } from '../../redux/hooks/hook';
import './userProfileStyle.scss';

export const UserProfile = () => {
  const email = useAppSelector((state) => state.auth.email);
  const token = useAppSelector((state) => state.auth.accessToken);
  const accounts = useAppSelector((state) => state.user.playerData);
  const accessToken = `Bearer ${token}`;

  const handleLogout = async () => {
    const data = {
      email,
      userAccounts: accounts,
    };
    await updateDb(data);
    await logoutRequest(accessToken);
  };

  return (
    <div className='userProfileWrapper'>
      <div className='navBar'>
        <NavLink to={'user'}>Profile</NavLink>
        <NavLink to={'settings'}>Settings</NavLink>
        <button className='logoutButton' type='button' onClick={handleLogout}>
          Sign Out
        </button>
      </div>
      <div className='profileContentWrapper'>
        <Outlet />
      </div>
    </div>
  );
};
