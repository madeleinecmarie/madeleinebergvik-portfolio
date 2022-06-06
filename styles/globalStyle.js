import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {

    // Font name
    // --font: 'Roboto', sans-serif;
    --font: 'Poppins', sans-serif;

    // Colors
    --white: #ffffff;
    --black: #0D0D0D;
    // --green: rgba(163, 212, 185, 0.62);
    --green: #C2E1D0;
    //--green: #A3D4B9;
    --blue: #E2EFF4;
    --darkblue: #86B3C1;
    --blueHover: #A1C7D2;
   
    // Fonts sizes
    --font-xl: 3.75rem;
    // 50px
    --font-lg: 3.125rem;
    // 30px
    --font-26: 1.625rem;
    --font-md: 2.188rem; 
    // 22px
    --font-sm: 1.375rem;
    // Nav 20px
    --font-xs: 1.125rem;
    --font-base: 1.125rem;
    
    // Font style
    --regular: 400;
    --medium: 500;
    --bold: 700;
    --boldest: 900;

    // Elements
    --transformation: transform .4s cubic-bezier(.165, .84, .44, 1);
    --skew-animation: skew(.90deg, .90deg);
`;

export default GlobalStyle;
