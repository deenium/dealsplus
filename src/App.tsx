import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";
import Button from "./common/Button/Button";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onModalClose = () => {
    setIsOpen(false);
  };

  const onModalSave = (permissionsGroup: any) => {
    setIsOpen(false);
    console.log("Saved permissions group:", permissionsGroup);
  };

  // This is a simple page implementation for demonstration purposes.
  // Main code starts from Modal component which is components folder.
  return (
    <div className="App">
      <Button variant="filled" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {isOpen && <Modal onClose={onModalClose} onSave={onModalSave} />}
    </div>
  );
}

export default App;
