import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --laranja: #FBAB4D;
    --cinza: #1A1A1A;
    --background: #090909;
  }


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }


 html{
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }
    @media (max-width: 720px){
        font-size: 87.5%; //14px
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: white;
    font-family: 'Inter', sans-serif;
    margin: 0 auto;
    padding: 0 ;
    max-width: 960px;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

Button{
  cursor: pointer;
}

`
