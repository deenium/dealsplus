import { useState } from "react";
import "./App.css";
import { Modal, type PermissionsGroupData } from "./components/Modal";
import Button from "./common/Button/Button";
import { Table } from "./extras/Table";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [pg, setPg] = useState<PermissionsGroupData[]>([]);

  const onModalClose = () => {
    setIsOpen(false);
  };

  const onModalSave = (permissionsGroup: PermissionsGroupData) => {
    setIsOpen(false);
    setPg((prev) => [...prev, permissionsGroup]);
  };

  // This is a simple page implementation for demonstration purposes.
  // Main code starts from Modal component which is components folder.
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
