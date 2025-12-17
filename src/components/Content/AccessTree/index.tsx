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

// Steps 2 & 3: Hierarchical access control tree (Structures or Entities)
export const AccessTree: React.FC<AccessTreeProps> = (props) => {
  const { step } = props;
  return (
    <div className="AccessTree">
      {/* Header title changes based on step: "Structure" for Step 2, "Entity" for Step 3 */}
      <Header title={step === 3 ? "Entity" : "Structure"} {...props} />
      <Body {...props} />
    </div>
  );
};
