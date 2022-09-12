import "./index.scss";

interface IButton {
  text: string;
  type: "submit" | "reset" | undefined;
}

export const Button = ({ text, type }: IButton) => {
  return (
    <button className="button" type={type} >
      {text}
    </button>
  );
};
