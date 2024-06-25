import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  }

  input, button, select {
    font-family: 'Rubik', sans-serif;
  }
`;

export default GlobalStyles;
