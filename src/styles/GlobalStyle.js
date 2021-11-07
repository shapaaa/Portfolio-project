import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins&display=swap');
*,
*::before,
*::after {
  box-sizing: border-box;
}
:root{
font-size:62.5%;
font-family: var(--poppins-font);
--orange:#ff9100;
--black:#413f54;
--poppins-font:'Poppins', sans-serif;
--playfair-font: 'Playfair Display', serif;
}
html:focus-within {
  scroll-behavior: smooth;
}
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
img,
picture {
  max-width: 100%;
  display: block;
}
`
export default GlobalStyle;

