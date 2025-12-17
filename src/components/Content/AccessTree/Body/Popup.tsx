import { FaChevronDown } from "react-icons/fa6";
import Text from "../../../../common/Text/Text";
import React, { useState, useRef } from "react";
import "./Body.css";
import { PopupItem } from "./PopupItem";

interface PopupProps {
  roles: string[];
  handleAccess: (structure: string, role: string) => void;
  structure: string;
  role: string;
}

// Dropdown popup for role selection with dynamic positioning
export const Popup: React.FC<PopupProps> = (props) => {
  const { roles, handleAccess, structure, role } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  // Toggles popup visibility and calculates position relative to trigger button
  const togglePopup = () => {
    if (!isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + 5, // 5px gap below the button
        // Align the right side of popup with right side of button
        // 200 is the width of .PopupContent defined in CSS
        left: rect.right - 200,
      });
    }
    setIsOpen(!isOpen);
  };

  // Handles role selection and closes popup
  const onAccessChange = (newAccess: string) => {
    setIsOpen(false);
    handleAccess(structure, newAccess);
  };

  return (
    <div
      className="AccessTreeRole Popup"
      onClick={togglePopup}
      ref={triggerRef}
    >
      <Text color="gray-dark">{role}</Text>
      <FaChevronDown className="DropDownIcon" />
      {isOpen && (
        <div
          className="PopupContent"
          style={{
            position: "fixed",
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            zIndex: 9999,
          }}
        >
          {roles.map((option) => (
            <PopupItem
              key={option}
              option={option}
              isSelected={option === role}
              onSelect={onAccessChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};
