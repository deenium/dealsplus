import Text from "../../common/Text/Text";
import { StepIcon } from "./StepIcon";
import "./ProgramStepper.css";

export interface StepCardProps {
  state: "done" | "active" | "pending";
  label: string;
  step: 1 | 2 | 3 | 4;
}

export const StepCard: React.FC<StepCardProps> = ({ state, label, step }) => {
  return (
    <span className="stepCard">
      <StepIcon state={state} step={step} />
      <Text
        variant="md"
        fontWeight={state === "active" ? "semi-bold" : "regular"}
        color={state === "active" ? "gray-dark" : "gray"}
      >
        {label}
      </Text>
    </span>
  );
};
