import { Row } from "./Row";
import "./Body.css";
import type { PermissionsGroupData } from "../../../Modal";
import { useEffect, useState } from "react";
import { fetchStructureRoles } from "../../../../api/mockapi";

interface BodyProps {
  step: number;
  structures: string[];
  formData: PermissionsGroupData;
  updateFormData: (updates: Partial<PermissionsGroupData>) => void;
}

export const Body: React.FC<BodyProps> = (props) => {
  const { step, structures, formData, updateFormData } = props;

  const [roles, setRoles] = useState<string[]>([]);

  const handleAccess = (structure: string, accessLevel: string) => {
    const updatedAccess = { ...formData.structureAccess };
    if (accessLevel === "No access") {
      delete updatedAccess[structure];
      updateFormData({ structureAccess: updatedAccess });
    } else {
      updateFormData({
        structureAccess: { ...updatedAccess, [structure]: accessLevel },
      });
    }
  };

  useEffect(() => {
    if (roles.length > 0) return;
    fetchStructureRoles().then((accessRoles) => {
      setRoles(accessRoles);
    });
  }, [roles]);

  return (
    <div className="AccessTreeBody">
      {structures.map((structure: string, index: number) => (
        <Row
          key={`${step}_${structure}_${index}`}
          structure={structure}
          index={index}
          handleAccess={handleAccess}
          isActive={structure in formData.structureAccess}
          role={formData.structureAccess[structure] || "No access"}
          roles={roles}
        />
      ))}
    </div>
  );
};
