import "./MemberList.css";

// Toggle switch component for member selection
interface ToggleProps {
  isOn: boolean;
  handleToggle: () => void;
}

export const Toggle: React.FC<ToggleProps> = (props) => {
  const { isOn, handleToggle } = props;
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className="slider" />
    </label>
  );
};
