import { ErrorComponentProps } from './homeTypes';

export const ErrorComponent = ({ data }: ErrorComponentProps) => {
  if (typeof data === 'string') {
    return <div className='errorMessage'>{data}</div>;
  }
  const { Error } = data;
  return <div className='errorMessage'>{Error}</div>;
};
