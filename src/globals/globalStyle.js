import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{margin: 0; padding: 0; outline: none; box-sizing: border-box; list-style: none;}
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap');
  
  html{
    height: 100%;
    font-family: 'Poppins', sans-serif;
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

  .video-react .video-react-big-play-button{ display: none !important; }
  .video-react-control-bar{ display: none !important; }
  .video-react .video-react-poster{background-size: cover !important; }
  .slick-dots li.slick-active button::before{color: red !important;}
  .slick-next{right: 4vw !important;
      z-index: 999 !important;
    &::before{
      opacity: 1 !important;
      color: gray !important;
      @media(min-width: 700px){
        font-size: 4vw !important;
      }
    }
  }
  .slick-prev{left: 4vw !important;
      z-index: 999 !important;
    &::before{
      opacity: 1 !important;
      color: gray !important;
      @media(min-width: 700px){
        font-size: 4vw !important;
      }
    }
  }
`;
