import styled from "styled-components";

const Navegation = styled.nav`
  input {
    display: none;
  }

  ul {
    display: flex;

    li {
      margin-left: 20px;
      padding: 10px;
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-secundary);
      cursor: pointer;

      &:hover {
        color: var(--hover-color);
        border-bottom: solid 1px;
        border-radius: 20px;
      }

      &:last-child {
        border-bottom: solid 1px var(--hover-color);
        border-radius: 20px;
        a {
          color: var(--hover-color);
        }
        &:hover {
          color: var(--hover-secundary);
        }
      }
    }
  }

  .menu {
    display: none;
    width: 60px;
    height: 60px;
  }

  .hamburguer {
    background-color: var(--secundary-color);
    position: relative;
    display: block;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;

    &:before {
      background-color: var(--secundary-color);
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.5s ease-in-out;
      top: -10px;
    }

    &:after {
      background-color: var(--secundary-color);
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.5s ease-in-out;
      bottom: -10px;
    }
  }

  @media (max-width: 900px) {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;

    input {
      &:checked ~ label .hamburguer {
        transform: rotate(45deg);
      }

      &:checked ~ label .hamburguer:before {
        transform: rotate(90deg);
        top: 0;
      }

      &:checked ~ label .hamburguer:after {
        transform: rotate(90deg);
        bottom: 0;
      }
    }

    label {
      position: absolute;
      right: 0;
      top: 13px;
      z-index: 1;
    }

    ul {
      height: 100vh;
      display: none;
      width: 200px;
      background-color: var(--primary-color);
      padding: 70px 20px 20px 20px;

      li {
        margin-bottom: 30px;
        text-align: center;
      }

      .cv {
        background: linear-gradient(to left, #b68b4b, #202221);
      }
    }
    .menu {
      display: block;
      align-self: flex-end;
    }
    input {
      &:checked ~ ul {
        display: block;
      }
    }
  }
`;

export { Navegation }