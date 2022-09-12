import { SyntheticEvent } from "react";
import Button from "../Button";
import Input from "../Input";
import SelectTip from "../SelectTip";
import Spacer from "../Spacer";
import Total from "../Total";
import "./index.scss";

export const Calculator = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      bill: { value: string };
      people: { value: string };
      tip: { value: string };
    };
    const bill = target.bill.value;
    const people = target.people.value;
    const tip = target.tip.value;
    console.log({ bill, people, tip });
  };

  return (
    <section className="calculator">
      <form onSubmit={handleSubmit}>
        <div className="bill">
          <Input placeholder="0" label="Bill" icon="bill" name="bill" />
          <SelectTip />
          <Input
            placeholder="0"
            label="Number of People"
            icon="person"
            name="people"
          />
        </div>
        <div className="mainTotal">
          <Total label="Tip Amount" totalNumber="4.27" />
          <Total label="Total" totalNumber="32.79" />
          <Spacer />
          <Button text="Reset" type='reset' />
        </div>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};
