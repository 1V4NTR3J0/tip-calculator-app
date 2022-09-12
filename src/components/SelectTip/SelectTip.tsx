import Input from "../Input";
import RadioButton from "../RadioButton";
import "./index.scss";

export const SelectTip = () => {
  const avialableTips:string[] = ["5", "10", "15", "25", "50"];

  return (
    <div className="tipContainer">
      <h6>Select Tip %</h6>
      <div className="tipGrid">
        {avialableTips.map((tip) => (
          <RadioButton key={tip} label={tip}/>
        ))}
        <Input placeholder="Custom" label='' icon='' name='customTip'/>
      </div>
    </div>
  );
};
