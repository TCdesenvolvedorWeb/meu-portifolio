import { Habilidades , Carrosel , SkillCard } from "../../assets/styles/Habilidades";
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

export { Skills };