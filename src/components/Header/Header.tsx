import "./index.scss";

interface IText {
  text: string;
}

export const Header = ({ text }: IText) => {
  return (
    <section className="Header">
      <h3>{text}</h3>
    </section>
  );
};
