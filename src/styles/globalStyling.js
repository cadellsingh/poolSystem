import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // look at responsive font sizes

    

    body {
        font-family: 'Montserrat', sans-serif;
        color: white;
    }

    a  {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: underline;
    }

    input, button, textarea, select {
        border: none;
        outline: none;
    }

    input, textarea {
        font-family: 'Montserrat', sans-serif;
    }
`;
