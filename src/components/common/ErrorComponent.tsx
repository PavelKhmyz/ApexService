interface ErrorComponentProps {
  message: string;
}
export const ErrorComponent = ({ message }: ErrorComponentProps) => (
  <div className='errorMessage'>{message}</div>
);
