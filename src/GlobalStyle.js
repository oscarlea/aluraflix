import { createGlobalStyle } from "styled-components";

const GlobaStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: Roboto, Arial, sans-serif;
    max-width: 1440px;
    width: 100%;
/*     margin: 0; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

`;


export default GlobaStyle;
