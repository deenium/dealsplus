import React from "react";
import Text from "../../common/Text/Text";
import { HiCheck } from "react-icons/hi";

interface StepIconProps {
  state: "done" | "active" | "pending";
  step: number;
}

export const StepIcon: React.FC<StepIconProps> = React.memo(
  ({ state, step }) => {
    const iconStyle = `${state}Icon`;
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
  }
);
