import { useState } from "react";
import { HiCheck } from "react-icons/hi";

interface CheckboxProps {
  active?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { active: activeProp } = props;
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={`Checkbox ${active && "CheckboxActive"}`}
      onClick={() => setActive((prev) => !prev)}
    >
      {active && <HiCheck className="CheckboxIcon" />}
    </div>
  );
};
