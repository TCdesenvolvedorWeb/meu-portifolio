import eu from "../../assets/img/img-portifólio.png";
import styled from "styled-components";
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

const About = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;

  h2 {
    font-size: 5rem;
  }

  @media (max-width: 1084px) {
    align-items: center;
    height: 100%;
  }
`;

const DevName = styled.h2`
  font-size: 2rem;
  margin: 0px 0 55px 20px;
  color: var(--hover-color);

  @media (max-width: 700px) {
    width: 320px;
  }
`;
const Info = styled.section`
  display: flex;
  align-items: center;
  gap: 100px;
  color: var(--text-primary);
  font-size: 1.7rem;
  letter-spacing: 0.1rem;
  text-align: justify;

  figure {
    min-height: 400px;
    min-width: 400px;
    background: linear-gradient(to right, #4d574e, #202221);
    position: relative;
    border-radius: 50px;

    img {
      width: 400px;
      position: absolute;
      top: -68px;
    }
  }

  article {
    width: 800px;

    h2 {
      margin-bottom: 20px;
      color: var(--secundary-color);
    }

    strong {
      color: var(--hover-color);
    }

    p {
      margin: 10px 0;
    }

    ul {
      display: flex;
      margin-top: 40px;
      li {
        padding: 6px 8px;
        color: var(--hover-color);
        cursor: pointer;
        border: solid 1px var(--hover-secundary);
        border-radius: 20px;
        margin-right: 10px;

        a {
          color: var(--hover-color);
          &:hover {
            color: var(--hover-secundary);
          }
        }
      }
    }
  }

  @media (max-width: 1084px) {
    flex-direction: column;
    height: 100%;

    article {
      width: 90vw;
      padding-bottom: 110px;
    }
  }

  @media (max-width: 400px) {
    article {
      h2 {
        font-size: 4.5rem;
      }
    }
  }
`;
