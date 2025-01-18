import CFrontend from "../../assets/img/Cfrontend.png";
import styled from "styled-components";
import { ThemeContext } from "../../Context/ThemeToggle";
import { useContext } from "react";

const Certificados = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Container
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
      <CardCertificado>
        <img
          src={CFrontend}
          alt="Certificado de conclusão, curso de desenvolvimento Frontend"
        />
        <figcaption>
          <p>
            Curso com acompanhamento e mentoria na área de desenvolvimento Web |
            Frontend. Desenvolvi Habilidades como: HTML | CSS | JavaScript |
            TypeScript | React | Context API | Redux | integração de APIs
            RESTful. Também desenvolvi e aprimorei soft skills como: Colaboração
            com parceiros desenvolvedores | Resolução de problemas | Analise de
            projetos | Gerenciamento de tempo e tarefas.
          </p>
        </figcaption>
      </CardCertificado>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const CardCertificado = styled.figure`
  width: 300px;
  background: linear-gradient(to left, #4d574e, #202221);
  box-shadow: 1px 1px 10px 10px #fff;

  img {
    width: 300px;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.7rem;
    text-align: justify;
    padding: 10px;
    color: var(--text-primary);
  }
`;

export { Certificados };
