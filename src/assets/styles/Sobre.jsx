import styled from "styled-components";

const About = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;

  h2 {
    font-size: 5rem;
  }

  @media (max-width: 1084px) {
    align-items: center;
    height: 100%;
  }
`;

const DevName = styled.h2`
  font-size: 2rem;
  margin: 0px 0 55px 20px;
  color: var(--hover-color);

  @media (max-width: 700px) {
    width: 320px;
  }
`;
const Info = styled.section`
  display: flex;
  align-items: center;
  gap: 100px;
  color: var(--text-primary);
  font-size: 1.7rem;
  letter-spacing: 0.1rem;
  text-align: justify;

  figure {
    min-height: 400px;
    min-width: 400px;
    background: linear-gradient(to right, #4d574e, #202221);
    position: relative;
    border-radius: 50px;

    img {
      width: 400px;
      position: absolute;
      top: -68px;
    }
  }

  article {
    width: 800px;

    h2 {
      margin-bottom: 20px;
      color: var(--secundary-color);
    }

    strong {
      color: var(--hover-color);
    }

    p {
      margin: 10px 0;
    }

    ul {
      display: flex;
      margin-top: 40px;
      li {
        padding: 6px 8px;
        color: var(--hover-color);
        cursor: pointer;
        border: solid 1px var(--hover-secundary);
        border-radius: 20px;
        margin-right: 10px;

        a {
          color: var(--hover-color);
          &:hover {
            color: var(--hover-secundary);
          }
        }
      }
    }
  }

  @media (max-width: 1084px) {
    flex-direction: column;
    height: 100%;

    article {
      width: 90vw;
      padding-bottom: 110px;
    }
  }

  @media (max-width: 400px) {
    article {
      h2 {
        font-size: 4.5rem;
      }
    }
  }
`;

export { About , DevName , Info }