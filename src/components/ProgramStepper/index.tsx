import { StepCard, type StepCardProps } from "./StepCard";
import "./ProgramStepper.css";
import React from "react";

interface ProgramStepperProps {
  step: number;
}

// Visual step indicator showing progress through 4-step workflow
export const ProgramStepper: React.FC<ProgramStepperProps> = React.memo(
  ({ step }) => {
    // Determines state of each step: done (completed), active (current), or pending (not yet reached)
    const obtainState = (
      currentStep: number
    ): "done" | "active" | "pending" => {
      if (currentStep < step) {
        return "done";
      } else if (currentStep === step) {
        return "active";
      } else {
        return "pending";
      }
    };

    const stepCards: StepCardProps[] = [
      { state: obtainState(1), label: "Group name", step: 1 },
      { state: obtainState(2), label: "Structures", step: 2 },
      { state: obtainState(3), label: "Entities", step: 3 },
      { state: obtainState(4), label: "Members", step: 4 },
    ];

    return (
      <div className="programStepper">
        {stepCards.map((card, index) => (
          <StepCard
            key={index}
            state={card.state}
            label={card.label}
            step={card.step}
          />
        ))}
      </div>
    );
  }
);
