import "./Button.css";

type ButtonVariant = "outline" | "filled";

interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "outline",
  className = "",
  onClick = () => {},
  children,
}) => {
  const combinedClassName = `button ${variant} ${className}`;
  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
