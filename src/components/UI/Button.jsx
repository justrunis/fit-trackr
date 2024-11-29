import React from "react";
import "./Button.css";

export default function Button({ label, className, children, ...props }) {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
}
