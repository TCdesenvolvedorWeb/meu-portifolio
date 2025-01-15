import styled from "styled-components";
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

const HeaderPortifolio = styled.header`
  border-bottom: solid 1px;
  border-color: var(--text-secundary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  h1 {
    border: solid 2px;
    border-radius: 30px;
    border-color: var(--secundary-color);
    padding: 10px;
    color: var(--text-primary);
  }
`;

