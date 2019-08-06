import { createGlobalStyle } from "styled-components";
import { colors } from "../globals";

export const GlobalStyle = createGlobalStyle`
  *{margin: 0; padding: 0; outline: none; box-sizing: border-box; list-style: none;}
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap');
  
  html{
    height: 100%;
    body{
      height: 100%;
      #root{
        height: 100%;
      }
    }
  }
  a,
  ::before,
  ::after{
    text-decoration:none;
  }
`;
