import styled from "styled-components";

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

export { Links , ProjectsCard , Projetos , SectionProjects }