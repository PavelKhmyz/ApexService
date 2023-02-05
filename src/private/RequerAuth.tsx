import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks/hook';
import { RequerAuthProps } from './privateType';

export const RequireAuth = ({ children }: RequerAuthProps) => {
  const auth = !!useAppSelector((state) => state.auth.accessToken);

  if (!auth) {
    return <Navigate to='/signIn' />;
  }
  return children;
};
