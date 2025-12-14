import React from "react";
import type { ReactNode } from "react";
import "./Text.css";

// Define strict types for your variants
type TextVariant = "xl" | "lg" | "md" | "sm";
type ColorVariant = "primary" | "gray" | "gray-light" | "gray-dark" | "white";
type fontWeight = "bold" | "semi-bold" | "regular";

interface TextProps {
  /**
   * The visual style variant defined in your CSS.
   * Defaults to 'body'.
   */
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
  color?: ColorVariant;
  fontWeight?: fontWeight;
}

const Text: React.FC<TextProps> = ({
  variant = "md",
  className = "",
  color = "gray-light",
  fontWeight = "",
  children,
  ...props
}) => {
  // Combine base style + variant style + any custom classes passed in prop
  const combinedClassName = `text ${variant} ${className} ${color} ${fontWeight}`;

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
};

export default Text;
