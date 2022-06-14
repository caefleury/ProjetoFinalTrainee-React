import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
    box-sizing: border-box;
   }
   
  body{
     height: 100%;
     font-family: 'Nunito', sans-serif;
     background: rgb(5,0,20);
     background: linear-gradient(180deg, rgba(5,0,20,1) 34%, rgba(56,103,161,1) 100%) ;
     margin:0;
   }
`;