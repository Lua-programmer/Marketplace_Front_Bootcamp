import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*,
margin: 0;
padding: 0;
outline: 0;
box-sizing: border-box 
}

body, input, text, div {
    font-family: 'Lexend Tera', sans-serif;
}

body, nav {
    background: linear-gradient(
        135deg,
        rgba(100, 217, 87, 1) 11%,
        rgba(156, 222, 146, 1) 31%,
        rgba(174, 246, 199, 1) 56%,
        rgba(227, 255, 168, 1) 81%
      );
      background-repeat: no-repeat;
}

`;
