import styled from "styled-components";

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

export {Carrosel , Habilidades , SkillCard }