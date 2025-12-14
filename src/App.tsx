import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button className="App-button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && (
        <Modal
          onClose={() => setIsOpen(false)}
          onSave={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
