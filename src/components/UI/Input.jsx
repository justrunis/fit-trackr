import React from "react";
import "./Input.css"; // Make sure to include the CSS for styling

export default function Input({
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
  id,
  disabled,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id} className="form_label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="input_field"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}
