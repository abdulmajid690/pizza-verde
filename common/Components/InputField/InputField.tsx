import React from "react";
import { useState } from "react";

interface InputProps {
  type: string;
  label: string;
  name: string;
  style: string;
  required?: boolean;
  handleChange?: any;
  onChange?: any;
  value: any;
}

const InputField = ({ label, name, type, style, required, value, onChange }: InputProps) => {
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (required && value.trim() === "") {
      setError(`${label} is required`);
    } else {
      setError("");
    }
  };

  return (
    <div className="input-container flex justify-between items-center mb-5">
      <label className={style}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
       
        className="rounded-[3px] h-[40px] shadow-[0px_0px_6px_#00000042] w-[50%] px-3 py-2"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
