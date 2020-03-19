import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Baloo+Da+2:400,700&display=swap&subset=latin-ext');
    *, *::before, *::after {
        box-sizing:border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size:62.5%; /*happy rems 1rem = 10px */
    }
    body{
        font-size:1.6rem; /*happy rems 16px */
        font-family: 'Baloo Da 2', cursive;
        padding-left:12rem;
    }
    `;

export default GlobalStyle;
