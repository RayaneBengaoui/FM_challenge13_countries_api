import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
	padding:0;
	box-sizing :border-box 
}

html{
    font-family: 'Nunito Sans', sans-serif;
    background-color: rgba(211, 211, 211, 0.2);
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

span {
      font-weight: 600;
    }


`;

export default GlobalStyle;
