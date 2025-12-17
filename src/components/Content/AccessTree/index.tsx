import "./AccessTree.css";
import { Header } from "./Header";
import { Body } from "./Body";
import type { PermissionsGroupData } from "../../Modal";

interface AccessTreeProps {
  step: number;
  structures: string[];
  formData: PermissionsGroupData;
  updateFormData: (updates: Partial<PermissionsGroupData>) => void;
}

export const AccessTree: React.FC<AccessTreeProps> = (props) => {
  const { step } = props;
  return (
    <div className="AccessTree">
      <Header title={step === 3 ? "Entity" : "Structure"} />
      <Body {...props} />
    </div>
  );
};
