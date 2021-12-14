import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
:root{
font-size:62.5%;
--purp:#6C63FF;
--gray:#535661;
--red:rgb(230, 0, 103);
--yellow:rgb(255, 225, 0);
--color-stroke: #d2d3d7;
--color-text:hsl(222deg, 22%, 5%);
--about-height:900px;
color:var(--color-text);
}
html,body {
  padding: 0;
  margin: 0;
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

