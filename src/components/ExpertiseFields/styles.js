import styled from "styled-components";
import headerBg from "../../assets/action_banner.png";
import slickBg from "../../assets/bgslick.png";

export const Container = styled.div`
  header {
    background: url(${headerBg});
    background-repeat: no-repeat;
    background-size: 100vw;
    min-height: 41vh;
  }
`;

export const TextWrap = styled.div`
  text-align: center;
  line-height: 5.4vw;
  padding-top: 1.8vw;
  h2 {
    font-size: 3.8vw;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1.1vw;
    color: #000;
  }
  h3 {
    font-size: 5.5vw;
    text-transform: uppercase;
    font-weight: 700;
    color: #e30613;
    letter-spacing: 0.5vw;
  }
`;

export const SlickContainer = styled.div`
  background: url('${slickBg}');
  padding: 3.3vw 0 3.9vw;
  article {
    background: #fff;
    width: 33.8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:
  }
  img {
    width: 31vw;
  }

  footer {
    padding: 1.5vw 2.5vw;
    text-align: center;
    p {
      font-size: 0.9vw;
      text-transform: uppercase;
      margin-bottom: 1.3vw;
    }
    a {
      width: 8.6vw;
      margin-top: 1vw;
      display: block;
      text-align: center;
      padding: 0.5vw 0.45vw 0.5vw 1vw;
      background: #000;
      color: #fff;
      margin: 0 auto;
      border: none;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.3vw;
    }
  }
`;
