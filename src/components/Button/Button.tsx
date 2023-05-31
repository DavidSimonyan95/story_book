import React from "react";
import "./Button.css";

interface IProps {
  /**change variant */
  variant?: "primary" | "success" | "danger";
  /**change text */
  label?: string;
  /**add className*/
  className?: string;
  /**add CSS Properties */
  styles?: React.CSSProperties;
  onClick?: () => void;
}
export const Button = ({
  variant = "primary",
  label = "Click",
  className,
  styles,
  ...props
}: IProps) => {
  return (
    <button
      className={`button ${className}  ${variant}`}
      style={styles}
      {...props}
    >
      {label}
    </button>
  );
};
