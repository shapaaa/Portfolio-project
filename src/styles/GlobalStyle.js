import { createGlobalStyle } from "styled-components";
import wotfard from '../assets/fonts/wotfard-regular-webfont.woff2'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: wotfard;
  src: url(${wotfard});
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins&display=swap');
*,
*::before,
*::after {
  box-sizing: border-box;
}
:root{
font-size:62.5%;
font-family: watford, sans-serif;
--secondary-font:'Poppins', sans-serif;
--primary-font:'Playfair Display', serif;
--purp:#6C63FF;
--gray:#535661;
--red:rgb(230, 0, 103);
--color-stroke: #d2d3d7;
--about-height:900px;
}
html,body {
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow-y: scroll;
}
img,
picture {
  max-width: 100%;
  display: block;
}
`
export default GlobalStyle;

