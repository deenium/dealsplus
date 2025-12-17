import { useState } from "react";
import "./App.css";
import { Modal, type PermissionsGroupData } from "./components/Modal";
import Button from "./common/Button/Button";
import { Table } from "./extras/Table";

// Main application component - manages permissions group creation workflow
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [pg, setPg] = useState<PermissionsGroupData[]>([]);

  // Closes the permissions group creation modal
  const onModalClose = () => {
    setIsOpen(false);
  };

  // Saves the created permissions group to state
  const onModalSave = (permissionsGroup: PermissionsGroupData) => {
    setIsOpen(false);
    setPg((prev) => [...prev, permissionsGroup]);
  };

  // Main workflow: Modal component handles the multi-step creation process
  return (
    <div className="App">
      <Button variant="filled" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {isOpen && <Modal onClose={onModalClose} onSave={onModalSave} />}
      <Table pg={pg} />
    </div>
  );
}

export default App;
