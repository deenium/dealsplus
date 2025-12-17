import Text from "../../../common/Text/Text";
import type { PermissionsGroupData } from "../../Modal";
import "./AccessTree.css";
import { Checkbox } from "./Checkbox";
interface HeaderProps {
  title: string;
  structures: string[];
  formData: PermissionsGroupData;
  updateFormData: (updates: Partial<PermissionsGroupData>) => void;
}

// Header row for AccessTree with select-all checkbox
export const Header: React.FC<HeaderProps> = (props) => {
  const { title, structures, formData, updateFormData } = props;

  const isActive = structures.every(
    (structure) => formData.structureAccess[structure] === "Full access"
  );

  const onCheckBoxClick = () => {
    const allAccess: Record<string, string> = {};
    if (!isActive) {
      structures.forEach((structure) => {
        allAccess[structure] = "Full access";
      });
    }
    updateFormData({ structureAccess: allAccess });
  };

  return (
    <div className="AccessTreeHeader">
      <Checkbox isActive={isActive} onClick={onCheckBoxClick} />
      {/* Dynamic title: "Structure" or "Entity" */}
      <Text variant="sm" className="AccessTreeText">
        {title}
      </Text>
      <Text variant="sm" className="AccessTreeRole">
        Role
      </Text>
    </div>
  );
};
