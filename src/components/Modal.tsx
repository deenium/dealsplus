import "./Modal.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Content } from "./Content";
import { useCallback, useState } from "react";

interface ModalProps {
  onClose: () => void;
  onSave: (permissionsGroup: any) => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { onClose, onSave } = props;
  const [step, setStep] = useState<number>(1);

  const onNext = useCallback(
    (step: number) => {
      if (step < 4) {
        setStep((prevStep) => prevStep + 1);
      } else {
        onSave({});
      }
    },
    [onSave]
  );

  const onBack = useCallback(
    (step: number) => {
      if (step > 1) {
        setStep((prevStep) => prevStep - 1);
      } else {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div className="background">
      <div className="container">
        <Header onClose={onClose} />
        <ProgramStepper step={step} />
        <Content step={step} />
        <Footer onBack={onBack} step={step} onNext={onNext} />
      </div>
    </div>
  );
};
