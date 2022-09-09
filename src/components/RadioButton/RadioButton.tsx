import "./index.scss";

interface ITip {
  label: string;
}

export const RadioButton = ({ label }: ITip) => {
  return (
    <>
      <div className="radioContainer">
        <input type="radio" name="tip" id={label} value={label} />
        <label htmlFor={label}>{label}%</label>
      </div>
    </>
  );
};
