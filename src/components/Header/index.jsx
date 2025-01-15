import { HeaderPortifolio } from "../../assets/styles/Header";
import { ButtonThemeToggle } from "../Buttons/ButtonThemeToggle";
import { Menu } from "../Menu/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderPortifolio>
      <Link to={"/"}>
        <h1 >DevTadeu</h1>
      </Link>

      <ButtonThemeToggle/>

      <Menu/>
    </HeaderPortifolio>
  );
};

export { Header };