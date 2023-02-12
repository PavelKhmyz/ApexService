import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks/hook';

interface RequereAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequereAuthProps) => {
  const auth = !!useAppSelector((state) => state.auth.accessToken);

  if (!auth) {
    return <Navigate to='/signIn' />;
  }
  return children;
};
