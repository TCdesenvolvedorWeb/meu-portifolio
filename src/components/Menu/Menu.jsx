import { Navegation } from "../../assets/styles/Menu";
import { Link } from "react-router-dom";
import CV from "../../assets/arquivos/CV.pdf";

const Menu = () => {

  return (
    <Navegation>
      <input type="checkbox" id="menu-hamburguer" />
      <label htmlFor="menu-hamburguer">
        <div className="menu">
          <span className="hamburguer"></span>
        </div>
      </label>

      <ul>
        <Link to={"/"}>
          <li>Sobre</li>
        </Link>
        <Link to={"/Projetos"}>
          <li>Projetos</li>
        </Link>
        <Link to={"/Habilidades"}>
          <li>Habilidades</li>
        </Link>
        <Link to={"/certificado"}>
          <li>Certificados</li>
        </Link>
        <li className="cv">
          <a target="_blank" href={CV}>
            CV
          </a>
        </li>
      </ul>
    </Navegation>
  );
};

export { Menu };