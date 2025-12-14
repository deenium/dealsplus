import Button from "../common/Button/Button";
import type { stepType } from "./ProgramStepper";

interface FooterProps {
  onBack: (step: stepType) => void;
  onNext: (step: stepType) => void;
  step: stepType;
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
