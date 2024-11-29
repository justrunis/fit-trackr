import "./Select.css";

export default function Select({ label, name, value, options, onChange }) {
  return (
    <div className="select-input">
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
