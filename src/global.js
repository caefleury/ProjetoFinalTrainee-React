import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
   box-sizing: border-box;
}
::-webkit-scrollbar {
   display: none;
   }
body{
   background-repeat: no-repeat;
   font-family: 'Nunito', sans-serif;
   background: linear-gradient(180deg, rgba(5,0,20,1) 37%, rgba(56,103,161,1) 100%) ;
   margin:0;
   padding:0;
}
`