import "./index.scss";
import Logo from "../../assets/svg/logo.svg";

export const Header = () => {
  return (
    <section className="header">
      <img src={Logo} alt="Logo" />
    </section>
  );
};
