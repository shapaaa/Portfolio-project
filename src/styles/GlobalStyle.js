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
font-family: 'Roboto', sans-serif;
--purp:#6C63FF;
--black:#413f54;
--secondary-font:'Poppins', sans-serif;
--primary-font:'Playfair Display', serif;
}
html,body {
  padding: 0;
  margin: 0;
}
img,
picture {
  max-width: 100%;
  display: block;
}
`
export default GlobalStyle;

