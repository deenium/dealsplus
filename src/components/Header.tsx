import { RxCross2 } from "react-icons/rx";
import { RiUserAddLine } from "react-icons/ri";
import Text from "../common/Text/Text";
import React from "react";

// Modal header with title and close button
interface HeaderProps {
  onClose: () => void;
}

export const Header: React.FC<HeaderProps> = React.memo(({ onClose }) => {
  return (
    <div className="header">
      <RiUserAddLine className="headerIcon" />
      <Text variant="xl" color="gray-dark" className="headerText">
        Create a new permissions group
      </Text>
      <button onClick={onClose} className="headerButton">
        <RxCross2 />
      </button>
    </div>
  );
});
