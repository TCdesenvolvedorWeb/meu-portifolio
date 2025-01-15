import eu from "../../assets/img/img-portifólio.png";
import { About , DevName , Info } from "../../assets/styles/Sobre";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext, themes } from "../../Context/ThemeToggle";

const Sobre = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <About style={{ backgroundColor: theme.background, color: theme.color }}>
      <DevName style={theme === themes.light ? { color: theme.color } : null}>
        <FontAwesomeIcon icon={faCode} /> DevTadeu
      </DevName>
      <Info>
        <figure>
          <img src={eu} alt="Eu" />
        </figure>
        <article>
          <h2 style={{ color: theme.colorSecundary }}> Tadeu Cardoso</h2>
          <strong>Desenvolvedor Front-end</strong>
          <p style={{ color: theme.colorSecundary }}>
            Olá! Me chamo Tadeu, estou realizando uma transição de carreira,
            trabalho como militar da força aérea desde 06/2020, hoje busco
            trabalhar como desenvolvedor Front-end, tenho mantido uma boa
            prática realizando projetos tanto do Front-end mentor, do curso que
            estou realizando quanto projetos pessoais, inclusive, este
            portifólio é 100% autoral.
          </p>
          <ul>
            <li style={{ background: theme.colorSecundary }}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/tadeu-cardoso-i-dev-26aa09337/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li style={{ background: theme.colorSecundary }}>
              <a target="_blank" href="https://github.com/TCdesenvolvedorWeb">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li style={{ background: theme.colorSecundary }}>
              <a
                target="_blank"
                href="http://localhost:5174/src/assets/img/whatsapp.jpg"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li style={{ background: theme.colorSecundary }}>
              <a
                target="_blank"
                href="https://www.instagram.com/tadeuzo/?igsh=NTh6ZmcwZHA1OXk%3D&utm_source=qr"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </article>
      </Info>
    </About>
  );
};

export { Sobre };