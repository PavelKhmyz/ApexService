import { NavLink } from 'react-router-dom';

export interface LinkElementProps {
  path: string;
  title: string;
}

export const LinkElement = ({ path, title }: LinkElementProps) => {
  const activeStyle = { textDecoration: 'underline' };
  const isActiveLink = (isActive: boolean) => (isActive ? activeStyle : undefined);
  return (
    <NavLink style={({ isActive }) => isActiveLink(isActive)} className='navigationLink' to={path}>
      {title}
    </NavLink>
  );
};
