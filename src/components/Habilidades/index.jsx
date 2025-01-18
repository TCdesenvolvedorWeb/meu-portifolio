import {
  Habilidades,
  Carrosel,
  SkillCard,
  TypeScript,
} from "../../assets/styles/Habilidades";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faGit } from "@fortawesome/free-brands-svg-icons/faGit";
import {
  faCss,
  faGithub,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../../Context/ThemeToggle";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Habilidades
      style={{ backgroundColor: theme.background, color: theme.color }}
    >
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
          <p>
            Linguagem de programação que adiciona interatividade e dinamismo a
            sites e aplicações web.
          </p>
        </SkillCard>
        <SkillCard>
          <TypeScript >TS</TypeScript>
          <p>
          Uma extensão do JavaScript que adiciona tipagem estática, tornando o código mais seguro, legível e fácil de manter, especialmente em projetos grandes.
          </p>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faHtml5} className="icon" />
          <p>
            Linguagem de marcação usada para estruturar o conteúdo de páginas
            web.
          </p>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faCss} className="icon" />
          <p>
            Estiliza páginas web, definindo cores, fontes, layouts e
            responsividade.
          </p>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faGit} className="icon" />
          <p>
            Sistema de controle de versão para rastrear mudanças no código e
            colaborar em projetos.
          </p>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faReact} className="icon" />
          <p>
            Biblioteca JavaScript para construir interfaces de usuário, focada
            em componentes reutilizáveis e performance.
          </p>
        </SkillCard>
        <SkillCard>
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <p>
            Plataforma para hospedar repositórios Git, facilitar colaboração e
            gerenciar projetos.
          </p>
        </SkillCard>
      </Carrosel>
    </Habilidades>
  );
};

export { Skills };
