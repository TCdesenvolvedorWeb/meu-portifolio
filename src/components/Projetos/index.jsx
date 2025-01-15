import styled from "styled-components";
import imgECommerce from "../../assets/img/e-commerce.png";
import imgPokedex from "../../assets/img/pokedex.png";
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
            <img src={imgECommerce} alt="" />
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
            <img src={imgPokedex} alt="" />
            <h3>Pokedex</h3>
            <p className="descrição">
              Pokedex, este projeto representou um grande desafio para mim, mas
              ao mesmo tempo me proporcionou grande aprendizado. Ele se trata de
              uma SPA, onde são aprensentados varios tipos de pokemons, contando
              com duas páginas, uma d apresentação de lista simples e uma de
              detalhes do pokemon.
            </p>
          </figcaption>
          <Links>
            <a
              target="_blank"
              href="https://github.com/TCdesenvolvedorWeb/pokedex"
            >
              <p>🔗 Ver no GitHub.</p>
            </a>
            <a
              target="_blank"
              href="https://pokedex-1vhu7zord-tcdesenvolvedorwebs-projects.vercel.app/"
            >
              <p>🔗 Ver o deploy. </p>
            </a>
          </Links>
        </ProjectsCard>
        <ProjectsCard>
          <figcaption>
            <img src={imgGithubAPi} alt="" />
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

const Projetos = styled.main`
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-coontent: center;
  align-items: center;
  color: var(--text-primary);
  gap: 40px;

  h2 {
    margin-top: 20px;
    font-size: 4rem;
  }

  .objetivo {
    font-size: 1.7rem;
    width: 80vw;
  }
`;

const SectionProjects = styled.section`
  display: flex;
  gap: 30px;

  @media (max-width: 900px) {
    overflow-x: auto;
    width: 80vw;
  }
`;

const ProjectsCard = styled.figure`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  border: solid 1px;
  border-color: var(--hover-color);
  border-bottom-right-radius: 20px;

  img {
    width: 100%;
  }

  h3 {
    font-size: 2rem;
    text-align: center;
    margin: 10px 0;
  }

  .descrição {
    font-size: 1.7rem;
    margin: 0 10px;
    height: 100px;
    overflow: auto;
    padding: 5px;
    scrollbar-width: none;
    scroll-behavior: smooth;

    strong {
      color: var(--hover-color);
    }
  }

  @media(max-width: 900px){
    min-width: 250px;
  }
`;

const Links = styled.div`
  display: flex;
  text-align: center;

  p {
    font-size: 1.2rem;
    padding: 3px;
    margin: 10px 5px;
    border-radius: 5px;
    color: var(--text-primary);
    background: linear-gradient(to left, #956e2f, #202221);
  }
`;

export { Projects };