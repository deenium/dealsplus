import { HiCheck } from "react-icons/hi";

// Checkbox component with optional active state and click handler
interface CheckboxProps {
  isActive?: boolean;
  onClick?: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { isActive, onClick } = props;

  return (
    <div
      className={`Checkbox ${isActive && "CheckboxActive"}`}
      onClick={onClick}
    >
      {isActive && <HiCheck className="CheckboxIcon" />}
    </div>
  );
};
