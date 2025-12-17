import "./Modal.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Content } from "./Content";
import { useCallback, useState } from "react";
import { ProgramStepper } from "./ProgramStepper";

// Main modal component - manages 4-step permissions group creation workflow
interface ModalProps {
  onClose: () => void;
  onSave: (permissionsGroup: PermissionsGroupData) => void;
}

// Data structure for permissions group (shared across all steps)
export interface PermissionsGroupData {
  name: string;
  structureAccess: Record<string, string>; // For Step 2, related to AccessTree results
  entityAccess: Record<string, boolean>; // For Step 3, related to AccessTree results
  members: string[]; // For Step 4, related to MemberList selections
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { onClose, onSave } = props;
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<PermissionsGroupData>({
    name: "",
    structureAccess: {},
    entityAccess: {},
    members: [],
  });

  // Merges partial updates into existing form data
  const updateFormData = useCallback(
    (updates: Partial<PermissionsGroupData>) => {
      setFormData((prev) => ({ ...prev, ...updates }));
    },
    []
  );

  // Advances to next step with validation (Step 1 requires group name)
  const onNext = useCallback(
    (currentStep: number) => {
      switch (currentStep) {
        case 1:
          // Validate group name
          if (formData.name.trim() === "") {
            alert("Please enter a valid group name.");
            return;
          }
          setStep((prevStep) => prevStep + 1);
          break;
        case 4:
          // Final step: Save data
          onSave(formData);
          break;
        default:
          setStep((prevStep) => prevStep + 1);
      }
    },
    [formData, onSave]
  );

  // Goes to previous step or closes modal if on Step 1
  const onBack = useCallback(
    (currentStep: number) => {
      if (currentStep > 1) setStep((prev) => prev - 1);
      else onClose();
    },
    [onClose]
  );

  return (
    <div className="background">
      <div className="container">
        <Header onClose={onClose} />
        <ProgramStepper step={step} />
        <Content
          step={step}
          formData={formData}
          updateFormData={updateFormData}
        />
        <Footer onBack={onBack} step={step} onNext={onNext} />
      </div>
    </div>
  );
};
