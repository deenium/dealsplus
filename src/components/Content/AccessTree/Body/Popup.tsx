import { FaChevronDown } from "react-icons/fa6";
import Text from "../../../../common/Text/Text";
import { useState, useRef } from "react";
import { HiCheck } from "react-icons/hi";
import "./Body.css";

export const Popup = () => {
  const [access, setAccess] = useState<string>("No Access");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const triggerRef = useRef<HTMLDivElement>(null); // Ref for the button
  const [coords, setCoords] = useState({ top: 0, left: 0 }); // State for position

  const options = ["No Access", "Basic Access", "Full Access"];

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
  return (
    <div
      className="AccessTreeRole Popup"
      onClick={togglePopup}
      ref={triggerRef}
    >
      <Text color="gray-dark">{access}</Text>
      <FaChevronDown className="DropDownIcon" />
      {isOpen && (
        <div
          className="PopupContent"
          style={{
            position: "fixed",
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            // Ensure z-index is higher than Footer
            zIndex: 9999,
          }}
        >
          {options.map((option) => (
            <div
              className={`PopupItem ${
                option === access && "SelectedPopupItem"
              }`}
              key={option}
              onClick={() => {
                setAccess(option);
                setIsOpen(false);
              }}
            >
              <Text color="gray-dark">{option}</Text>
              {option === access && <HiCheck className="CheckIcon" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
