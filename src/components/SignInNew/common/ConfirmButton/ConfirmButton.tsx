export interface ConfirmButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export const ConfirmButton = ({
  text,
  onClick,
  disabled = false,
}: ConfirmButtonProps) => (
  <button
    disabled={disabled}
    type="button"
    className="signInButton"
    onClick={onClick}
  >
    {text}
  </button>
);
