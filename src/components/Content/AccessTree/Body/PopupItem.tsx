import React from "react";
import Text from "../../../../common/Text/Text";
import "./Body.css";
import { HiCheck } from "react-icons/hi";

// Individual role option in dropdown with selection indicator
interface PopupItemProps {
  option: string;
  isSelected: boolean;
  onSelect: (option: string) => void;
}

export const PopupItem: React.FC<PopupItemProps> = (props) => {
  const { option, isSelected, onSelect } = props;

  return (
    <div
      className={`PopupItem ${isSelected && "SelectedPopupItem"}`}
      key={option}
      onClick={() => onSelect(option)}
    >
      <Text color="gray-dark">{option}</Text>
      {isSelected && <HiCheck className="CheckIcon" />}
    </div>
  );
};
