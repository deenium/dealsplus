import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onModalClose = () => {
    setIsOpen(false);
  };

  const onModalSave = (permissionsGroup: any) => {
    setIsOpen(false);
    console.log("Saved permissions group:", permissionsGroup);
  };

  return (
    <div className="App">
      <button className="App-button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal onClose={onModalClose} onSave={onModalSave} />}
    </div>
  );
}

export default App;
