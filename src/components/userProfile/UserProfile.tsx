import { Outlet } from 'react-router-dom';
import { logoutRequest, updateDb } from '../../axios/authRequests';
import { useAppSelector } from '../../redux/hooks/hook';
import { LinkElement } from '../Header/components/LinkElement';
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
        <LinkElement path='user' title='Profile' />
        <LinkElement path='settings' title='Settings' />
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
