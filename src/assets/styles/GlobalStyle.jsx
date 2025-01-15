import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Kumbh Sans" , sans-serif;
}

html{
  font-size: 62.5%;
  background-color: var(--primary-color);
}

li{
  list-style: none;
}

a{
  text-decoration: none;
  color: #000;
}

:root{
  --primary-color: #202221;
  --secundary-color: #95B2B8;
  --text-primary: #DEE7E7;
  --text-secundary: #829191;
  --hover-color: #B68B4B;
  --hover-secundary: #956E2F;
}

`;

export { GlobalStyle }
