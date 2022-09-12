import { FormEvent, useState } from "react";
import "./index.scss";

interface IInput {
  placeholder?: string;
  icon?: string;
  label?: string;
  name: string;
}

export const Input = ({ placeholder, label, icon, name }: IInput) => {
  const [value, setValue] = useState<string>("");

  const handleChange = ({
    currentTarget: { value },
  }: FormEvent<HTMLInputElement>) => {
    setValue(value);
  };

  const handleBlur = ({
    currentTarget: { value },
  }: FormEvent<HTMLInputElement>) => {
    console.log(value);
  };

  return (
    <div className="inputContainer">
      <label>
        {label !== "" && label}
        <input
          type="number"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            icon === "" ? "" : icon === "bill" ? "billIcon" : "personIcon"
          }
        />
      </label>
    </div>
  );
};
