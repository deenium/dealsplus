import Button from "../common/Button/Button";

interface FooterProps {
  onClose: () => void;
  onSave: () => void;
  step: 1 | 2 | 3 | 4;
}

export const Footer: React.FC<FooterProps> = ({ onClose, onSave, step }) => {
  return (
    <div className="footer">
      <Button onClick={onClose}>{step === 1 ? "Cancel" : "Go back"}</Button>
      <Button variant="secondary" onClick={onSave}>
        {step === 4 ? "Create group" : "Next"}
      </Button>
    </div>
  );
};
