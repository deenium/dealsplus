import Text from "../../common/Text/Text";
import { HiCheck } from "react-icons/hi";

interface StepIconProps {
  state: "done" | "active" | "pending";
  step: 1 | 2 | 3 | 4;
}

export const StepIcon: React.FC<StepIconProps> = ({ state, step }) => {
  const iconStyle =
    state === "done"
      ? "doneIcon"
      : state === "active"
      ? "activeIcon"
      : "pendingIcon";
  return (
    <span className={`stepIcon ${iconStyle}`}>
      {state === "done" ? (
        <HiCheck />
      ) : (
        <Text variant="sm" color={state === "active" ? "white" : "gray-dark"}>
          {step}
        </Text>
      )}
    </span>
  );
};
