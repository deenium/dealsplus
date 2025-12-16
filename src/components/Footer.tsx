import Button from "../common/Button/Button";

interface FooterProps {
  onBack: (step: number) => void;
  onNext: (step: number) => void;
  step: number;
}

export const Footer: React.FC<FooterProps> = ({ onBack, onNext, step }) => {
  return (
    <div className="footer">
      <Button onClick={() => onBack(step)}>
        {step === 1 ? "Cancel" : "Go back"}
      </Button>
      <Button variant="filled" onClick={() => onNext(step)}>
        {step === 4 ? "Create group" : "Next"}
      </Button>
    </div>
  );
};
