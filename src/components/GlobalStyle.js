import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
	padding:0;
	box-sizing :border-box 
}

html{
    font-family: 'Nunito Sans', sans-serif;
    background-color: #fcfcfc;
}

button{
    outline: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-weight : 700;
}

h2{
    font-size : 1.2rem;
    padding-bottom:1rem;
}


`;

export default GlobalStyle;
