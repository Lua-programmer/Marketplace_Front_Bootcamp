import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*,
margin: 0;
padding: 0;
outline: 0;
box-sizing: border-box 
}

body, text, div, a {
    font-family: 'Lexend Tera', sans-serif;
    font-size:14px;
  color: rgb(1, 50, 32);
}
small{
    font-size:12px;
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
body {
    padding-bottom:5.5rem;
  padding-top:5.5rem;
  
}
input, Form {
  background-color: transparent;
  border-radius: 10px;
  border: none;
  font-size: 0.9rem;
  color: rgb(1, 50, 32);
}
h2{
    font-size: 1rem;
}
`;