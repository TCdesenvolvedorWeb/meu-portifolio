import eu from "../../assets/img/img-portifólio.png";
import { About, DevName, Info } from "../../assets/styles/Sobre";
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
            Olá, me chamo Tadeu, desenvolvedor Front-end em transição de carreira,
            sou militar da FAB, onde atuo desde 2020. Apaixonado por tecnologia, estou focado em criar interfaces dinâmicas e funcionais que entreguem valor real aos
            usuários.
            <br /><br />
            Tenho experiência no desenvolvimento de SPAs utilizando
            React e seus frameworks, além de domínio em HTML, CSS, e JavaScript.
            Também ampliei meus conhecimentos para o backend, explorando
            Node.js, Express, PostgreSQL, e SQL, o que me dá uma visão completa
            do desenvolvimento web.
            <br /><br />
             Minhas habilidades foram consolidadas por
            meio de projetos práticos, como desafios do Front-end Mentor,
            atividades do curso que estou concluindo, e iniciativas autorais,
            incluindo este portfólio, que foi desenvolvido do zero por mim.
            Estou motivado a aplicar essas competências em um ambiente
            colaborativo, aprendendo e contribuindo para a criação de soluções
            tecnológicas que fazem a diferença.
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
