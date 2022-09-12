import "./index.scss";

interface ITotal {
  label: string;
  totalNumber: string;
}

export const Total = ({ label, totalNumber }: ITotal) => {
  return (
    <div className="totalContainer">
      <div className="label">
        <h6>
          {label}
          <br></br>
          <small>/ person</small>
        </h6>
      </div>
      <div className="total">
        <h3>${totalNumber}</h3>
      </div>
    </div>
  );
};
