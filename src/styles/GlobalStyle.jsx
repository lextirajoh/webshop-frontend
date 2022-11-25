import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
  position: relative;
  /* min-height: 100%; */
  scroll-behavior: smooth;
}

body {
  color:white;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: arial;
  background-color: black;
  background-image: linear-gradient(
  90deg,
  hsl(240deg 58% 13%) 0%,
  hsl(246deg 58% 14%) 17%,
  hsl(252deg 59% 14%) 43%,
  hsl(259deg 62% 15%) 65%,
  hsl(266deg 65% 15%) 80%,
  hsl(272deg 68% 15%) 89%,
  hsl(278deg 74% 16%) 95%,
  hsl(284deg 80% 15%) 98%,
  hsl(290deg 89% 15%) 100%,
  hsl(295deg 100% 14%) 100%
);
}

#root  {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img, picture, video, canvas, svg {
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

p {
  hyphens: auto;
}

a {
  text-decoration: none;
  color: black;
}

`;

export default GlobalStyle;
