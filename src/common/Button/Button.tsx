// Reusable button component with outline and filled variants
import "./Button.css";

type ButtonVariant = "outline" | "filled";

interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

// Renders button with combined variant and custom CSS classes
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
