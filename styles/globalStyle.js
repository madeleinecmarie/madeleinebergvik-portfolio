import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {

    // Font name
    --font: 'DM Sans', sans-serif;

    // Colors
    --white: #F9F9F9;
    --black: #0D0D0D;
    --gray: #BFBFBF;
    --emerald: #439A86;

    // Fonts sizes
    --font-xl: 5.625rem;
    --font-lgx2: 4.375rem;
    --font-lg: 3.75rem;
    --font-md: 2.188rem; 
    --font-sm: 1.625rem;
    --font-xs: 0.875rem;
    --font-base: 1.25rem;
    
    // Font style
    --regular: 400;
    --medium: 500;
    --bold: 700;
`;

export default GlobalStyle;
