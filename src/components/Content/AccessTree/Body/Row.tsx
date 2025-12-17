import Text from "../../../../common/Text/Text";
import "./Body.css";
import "../AccessTree.css";
import { Checkbox } from "../Checkbox";
import { Popup } from "./Popup";
import React from "react";

interface RowProps {
  structure: string;
  index: number;
  handleAccess: (structure: string, accessLevel: string) => void;
  isActive?: boolean;
  role: string;
  roles: string[];
}

export const Row: React.FC<RowProps> = (props) => {
  const { structure, handleAccess, role, roles, isActive } = props;

  const onCheckBoxClick = () => {
    if (isActive) {
      handleAccess(structure, "No access");
    } else {
      handleAccess(structure, "Full access");
    }
  };

  return (
    <div className={`AccessTreeRow`}>
      <Checkbox isActive={isActive} onClick={onCheckBoxClick} />
      <Text color="gray-dark" className="AccessTreeText">
        {structure}
      </Text>
      <Popup
        role={role}
        roles={roles}
        structure={structure}
        handleAccess={handleAccess}
      />
    </div>
  );
};
