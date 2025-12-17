// Reusable text component with size, color, and font-weight variants
import React from "react";
import type { ReactNode } from "react";
import "./Text.css";

// Supported text style variants
type TextVariant = "xl" | "lg" | "md" | "sm";
type ColorVariant = "primary" | "gray" | "gray-light" | "gray-dark" | "white";
type fontWeight = "bold" | "semi-bold" | "regular";

interface TextProps {
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
  color?: ColorVariant;
  fontWeight?: fontWeight;
}

// Renders styled text element with combined variant classes
const Text: React.FC<TextProps> = ({
  variant = "md",
  className = "",
  color = "gray-light",
  fontWeight = "",
  children,
  ...props
}) => {
  // Combines all style classes (variant, color, font-weight, custom)
  const combinedClassName = `text ${variant} ${className} ${color} ${fontWeight}`;

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
};

export default Text;
