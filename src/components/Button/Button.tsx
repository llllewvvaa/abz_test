import './Button.scss';
import React from "react";

interface Props {
  width: string;
  text: string;
  type: "button" | "submit";
  onSubmit?: () => void;
  disabled: boolean;
}

export const Button: React.FC<Props> = ({
  width,
  text,
  type,
  onSubmit,
  disabled,
}) => {
  return (
    <button
      className="button"
      style={{width: width}}
      type={type}
      onClick={onSubmit}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
