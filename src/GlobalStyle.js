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
    margin: 0 auto; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* .App {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
 */
`;


export default GlobaStyle;
