import "./Modal.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProgramStepper } from "./ProgramStepper";

interface ModalProps {
  onClose: () => void;
  onSave: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { onClose, onSave } = props;
  const step = 4;
  return (
    <div className="background">
      <div className="container">
        <Header onClose={onClose} />
        <ProgramStepper step={step} />
        <p className="pd">Content</p>
        <Footer onClose={onClose} step={step} onSave={onSave} />
      </div>
    </div>
  );
};
