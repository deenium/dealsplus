import React from "react";
import Text from "../../common/Text/Text";
import { HiCheck } from "react-icons/hi";

interface StepIconProps {
  state: "done" | "active" | "pending";
  step: number;
}

// Step icon showing checkmark when done, step number otherwise
export const StepIcon: React.FC<StepIconProps> = React.memo(
  ({ state, step }) => {
    const iconStyle = `${state}Icon`;
    return (
      <span className={`stepIcon ${iconStyle}`}>
        {/* Shows checkmark for completed steps, number for active/pending steps */}
        {state === "done" ? (
          <HiCheck />
        ) : (
          <Text variant="sm" color={state === "active" ? "white" : "gray-dark"}>
            {step}
          </Text>
        )}
      </span>
    );
  }
);
