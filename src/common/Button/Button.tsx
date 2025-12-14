import "./Button.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  onClick = () => {},
  children,
}) => {
  const combinedClassName = `button ${variant} ${className}`;
  return (
    <span className={combinedClassName} onClick={onClick}>
      {children}
    </span>
  );
};

export default Button;
