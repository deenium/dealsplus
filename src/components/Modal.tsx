import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Modal.css";

export type ModalProps = {
  onClose: () => void;
  onSave: () => void;
};

export const Modal: React.FC<ModalProps> = (props) => {
  const { onClose, onSave } = props;
  return (
    <div className="background">
      <div className="container">
        <Header onClose={onClose} />
        <div className="bgred">Progress Stepper</div>
        <div>Content</div>
        <Footer onClose={onClose} step={4} onSave={onSave} />
      </div>
    </div>
  );
};
