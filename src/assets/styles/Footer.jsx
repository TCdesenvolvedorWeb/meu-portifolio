import styled from "styled-components";

const FooterPage = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #000;
  height: 70px;
  margin: auto;

  h3 {
    color: var(--text-primary);
    font-size: 2rem;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      padding: 6px 8px;
      cursor: pointer;
      color: var(--text-secundary);
      border: solid 1px var(--text-secundary);
      border-radius: 20px;
      margin-right: 10px;

      a{
        color: var(--text-secundary);
      }

      &:hover {
        color: var(--text-primary);
      }
        
      &:first-child {
        border: none;
        font-size: 1.7rem;
        cursor: auto;

        &:hover{
            color: var(--text-secundary);
        }
      }
    }

  }

  @media(max-width: 600px){
    flex-direction: column;
    height: 100px;
  }
`;

export { FooterPage }