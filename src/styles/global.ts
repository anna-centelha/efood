// src/styles/global.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif; /* Certifique-se de que a fonte 'Roboto' está sendo carregada (via Google Fonts no index.html, por exemplo) */
  }

  body {
    background-color: ${(props) => props.theme.colors.tertiary}; /* Fundo geral da página, de acordo com seu tema */
    color: ${(props) => props.theme.colors.darkGray}; /* Cor padrão do texto */
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;