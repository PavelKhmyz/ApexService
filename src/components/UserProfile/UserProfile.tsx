import { Outlet } from 'react-router-dom';
import { logoutRequest, updateDb } from '../../axios/authRequests';
import { useAppSelector } from '../../redux/hooks/hook';
import { LinkElement } from '../common/Header/components/LinkElement';
import './UserProfile.style.scss';

export const UserProfile = () => {
  const { email, accessToken: token } = useAppSelector((state) => state.auth);
  const { playerData } = useAppSelector((state) => state.user);
  const accessToken = `Bearer ${token}`;

  const handleLogout = async () => {
    const logoutData = {
      email,
      userAccounts: playerData,
    };
    await updateDb(logoutData);
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
