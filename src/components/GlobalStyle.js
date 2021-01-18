import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
	padding:0;
	box-sizing :border-box 
}

html{
    font-family: 'Nunito Sans', sans-serif;
}

button{
    outline: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-weight : 700;
}


`;

export default GlobalStyle;
