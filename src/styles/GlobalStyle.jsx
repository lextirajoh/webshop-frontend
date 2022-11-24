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
  min-height: 100%;
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
 hsl(221deg 65% 51%) 0%,
  hsl(208deg 100% 43%) 11%,
  hsl(205deg 100% 43%) 22%,
  hsl(202deg 100% 43%) 33%,
  hsl(198deg 100% 42%) 44%,
  hsl(193deg 100% 40%) 56%,
  hsl(189deg 100% 38%) 67%,
  hsl(184deg 100% 36%) 78%,
  hsl(178deg 86% 38%) 89%,
  hsl(170deg 45% 52%) 100%
);}


#root  {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  margin-top: 7rem;
  margin-bottom: 15rem;

  @media (max-width: 62rem) {
    margin-bottom: 20rem;
  }
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
