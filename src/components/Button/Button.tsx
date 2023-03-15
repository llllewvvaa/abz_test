import './Button.scss';
import React from "react";

interface Props {
  width: string;
  text: string;
}

export const Button: React.FC<Props> = ({width, text}) => {
  return (
    <button
      className="button"
      style={{width: width}}
    >
      {text}
    </button>
  )
}
