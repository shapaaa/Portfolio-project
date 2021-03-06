import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
:root{
font-size:62.5%;
--red:rgb(230, 0, 103);
--yellow:rgb(255, 225, 0);
--color-stroke: #d2d3d7;
--color-text:hsl(222deg, 22%, 5%);
color:var(--color-text);
}
html,body {
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  overflow-y: scroll;
}
img,
picture {
  max-width: 100%;
  display: block;
}
`
export default GlobalStyle;

