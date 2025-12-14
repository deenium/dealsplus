import React from "react";
import type { HTMLAttributes, ReactNode } from "react";
import "./Text.css";

// Define strict types for your variants
type TextVariant = "xl" | "lg" | "md" | "sm";
type ColorVariant = "primary" | "gray" | "gray-light" | "gray-dark";

interface TextProps {
  /**
   * The visual style variant defined in your CSS.
   * Defaults to 'body'.
   */
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
  color?: ColorVariant;
}

const Text: React.FC<TextProps> = ({
  variant = "md",
  className = "",
  color = "gray-light",
  children,
  ...props
}) => {
  // Combine base style + variant style + any custom classes passed in prop
  const combinedClassName = `text ${variant} ${className} ${color}`;

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
};

export default Text;
