import styled from "styled-components";

const ThemeToggle = styled.button`
  width: 70px;
  height: 33px;
  border-radius: 20px;
  position: relative;

  .sun {
    position: absolute;
    left: 3px;
    top: 2px;
    color: var(--hover-secundary);
    background-color: var(--primary-color);
    padding: 5px 4px;
    border: solid 1px;
    border-color: var(--hover-secundary);
    border-radius: 20px;
  }
  .moon {
    position: absolute;
    right: 3px;
    top: 2px;
    color: var(--secundary-color);
    background-color: var(--primary-color);
    padding: 5px 6px;
    border: solid 1px;
    border-color: var(--hover-secundary);
    border-radius: 20px;
  }

  @media(max-width: 900px){
    margin-right: 70px;
  }
`;

export { ThemeToggle }