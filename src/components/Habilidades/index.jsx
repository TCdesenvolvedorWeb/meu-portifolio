import styled from "styled-components";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faGit } from "@fortawesome/free-brands-svg-icons/faGit";
import {
  faCss,
  faGithub,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { skilsData } from "../../utils";
import { ThemeContext } from "../../Context/ThemeToggle";

const Skills = () => {
  const [data, setData] = useState();
  const { theme } = useContext(ThemeContext)

  const getSkills = async () => {
    const response = await axios.get(skilsData);
    setData(await response.data);
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <Habilidades style={{backgroundColor: theme.background , color: theme.color}}>
      <h2>Habilidades</h2>
      <p className="experiencias">
        Possuo experiência no desenvolvimento web utilizando HTML, CSS e
        JavaScript, criando interfaces responsivas e acessíveis. Tenho
        proficiência em React, com foco na construção de componentes
        reutilizáveis e na integração eficiente com APIs RESTful. Sou
        familiarizado com versionamento de código utilizando Git e mantenho
        repositórios organizados e colaborativos no GitHub. Já participei de
        projetos individuais, aplicando boas práticas de desenvolvimento e
        entregando soluções funcionais.
      </p>

      <Carrosel>
        <SkillCard>
          <FontAwesomeIcon icon={faJs} className="icon" />
          <p> {data?.javascrip.description} </p>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faHtml5} className="icon" />
          <p> {data?.html.description} </p>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faCss} className="icon" />
          <p> {data?.css.description} </p>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faReact} className="icon" />
          <p> {data?.react.description} </p>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <p> {data?.github.description} </p>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faGit} className="icon" />
          <p> {data?.git.description} </p>
        </SkillCard>
      </Carrosel>
    </Habilidades>
  );
};

const Habilidades = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-primary);

  h2 {
    width: 210px;
    font-size: 4rem;
  }
  
  .experiencias{
    width: 80vw;
  }

  p {
    margin-top: 40px;
    font-size: 1.7rem;
    text-align: justify;
  }

  @media(max-width: 900px){
    height: 100vh;
  }
`;
const Carrosel = styled.section`
  margin: 40px 0;
  width: 80vw;
  overflow-x: auto;
  scroll-behavior: smooth;
  display: flex;
  gap: 40px;
`;

const SkillCard = styled.div`
  max-width: 250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #4d574e, #202221);
  color: var(--text-primary);
  border-radius: 10px;

  .icon{
    height: 100px;
    margin: 20px 0;
  }

  p {
    margin: 20px 10px;
  }

  @media(max-width: 900px){
    height: 300px;
  }
`;

export { Skills };
