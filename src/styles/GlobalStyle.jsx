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
  hsl(0deg 0% 48%) 0%,
  hsl(53deg 1% 51%) 11%,
  hsl(54deg 2% 55%) 22%,
  hsl(54deg 3% 59%) 33%,
  hsl(54deg 5% 63%) 44%,
  hsl(54deg 7% 67%) 56%,
  hsl(54deg 9% 70%) 67%,
  hsl(54deg 13% 74%) 78%,
  hsl(54deg 18% 78%) 89%,
  hsl(55deg 24% 82%) 100%
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
