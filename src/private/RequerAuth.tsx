import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks/hook';

interface RequerAuthProps {
  children: JSX.Element;
}

export const RequerAuth = ({ children }: RequerAuthProps) => {
  const auth = !!useAppSelector((state) => state.auth.accessToken);

  if (!auth) {
    return <Navigate to='/signIn' />;
  }
  return children;
};
