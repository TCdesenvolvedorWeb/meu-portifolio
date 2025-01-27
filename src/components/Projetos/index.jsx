import { Projetos , Links , ProjectsCard , SectionProjects } from "../../assets/styles/Projetos";
import imgECommerce from "../../assets/img/e-commerce.png";
import imgSpace from "../../assets/img/space-tourism.png";
import imgGithubAPi from "../../assets/img/github-api.png";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeToggle";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Projetos style={{ backgroundColor: theme.background, color: theme.color }}>
      <h2>Projetos</h2>
      <p className="objetivo">
        Cada um dos meus projetos atuias teve como intuito e objetivo principal,
        o meu aprendizado, por meios de desafios técnicos, desde os mais simples
        até os mais dificeis, pois todos e cada um deles marcam minha jornada de
        aprendizado na área do desenvolvimento de <strong> Front-end</strong>,
        mas calma, não acaba por aí, pois em dado momento virão projetos com
        <strong> Back-end </strong>.
      </p>

      <SectionProjects>
        <ProjectsCard>
          <figcaption>
            <img src={imgECommerce} alt="E-commerce" loading="lazy"/>
            <h3>E-commerce</h3>
            <p className="descrição">
              E-Commmerce | Sneakers, se trata da apresentação do produto de uma
              loja online, onde temos uma das funcionalidades mais importantes
              como o carrinho dentre outras mais.
            </p>
          </figcaption>
          <Links>
            <a
              target="_blank"
              href="https://github.com/TCdesenvolvedorWeb/e-commerce-sneakers"
            >
              <p>🔗 Ver no GitHub.</p>
            </a>
            <a
              target="_blank"
              href="https://e-commerce-sneakers-83ck9lthh-tcdesenvolvedorwebs-projects.vercel.app/"
            >
              <p>🔗 Ver o deploy. </p>
            </a>
          </Links>
        </ProjectsCard>
        <ProjectsCard>
          <figcaption>
            <img src={imgSpace} alt="Space tourism website" loading="lazy"/>
            <h3>Space Tourism website</h3>
            <p className="descrição">
              Space Tourism website, se trata de um site de turismo, onde temos 4 páginas, Home, Destination, crew e technology. Cada uma conta com um sistema simples de seleção de informções, basta clicar no botão. Mas o que eu mais gostei deste projeto não está no que se pode ver no Deploy, mas se em sua estrutura, no lugar de um simplesmente sair fazendo os cards um por um manualmente fiz um array com os cards, onde se o index for igual ao index do array, ele aparece, fazendo com que usase menos linhas de código e mantesse a sua organização tornando-o de fácil de manutenção.
            </p>
          </figcaption>
          <Links>
            <a
              target="_blank"
              href="https://github.com/TCdesenvolvedorWeb/space-tourism-website"
            >
              <p>🔗 Ver no GitHub.</p>
            </a>
            <a
              target="_blank"
              href="https://space-tourism-website-gamma-orpin.vercel.app/"
            >
              <p>🔗 Ver o deploy. </p>
            </a>
          </Links>
        </ProjectsCard>
        <ProjectsCard>
          <figcaption>
            <img  src={imgGithubAPi} alt="GitHub API" loading="lazy"/>
            <h3>GitHub API</h3>
            <p className="descrição">
              GitHub API, nele você poderá acessar 10 dos meus repositórios
              buscando por <strong> TCDesenvolvedorWeb </strong>, ou se você
              preferir, pode buscar pelo seu próprio ou de outra pessoa, basta
              digitar o nome do usuário e escolher qual repositório deseja
              acessar.
            </p>
          </figcaption>
          <Links>
            <a
              target="_blank"
              href="https://github.com/TCdesenvolvedorWeb/GitHUb-API"
            >
              <p>🔗 Ver no GitHub.</p>
            </a>
            <a
              target="_blank"
              href="https://tcdesenvolvedorweb.github.io/GitHUb-API/"
            >
              <p>🔗 Ver o deploy. </p>
            </a>
          </Links>
        </ProjectsCard>
      </SectionProjects>
    </Projetos>
  );
};

export { Projects };