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
  hsl(212deg 100% 20%) 0%,
  hsl(212deg 100% 21%) 11%,
  hsl(211deg 99% 22%) 22%,
  hsl(211deg 99% 23%) 33%,
  hsl(211deg 99% 24%) 44%,
  hsl(211deg 99% 25%) 56%,
  hsl(210deg 99% 26%) 67%,
  hsl(210deg 99% 27%) 78%,
  hsl(210deg 100% 28%) 89%,
  hsl(210deg 100% 29%) 100%
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

  :hover {
    color: #353535;
  }
}

`;

export default GlobalStyle;
