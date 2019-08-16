import styled from "styled-components";
import slickBg from "../../assets/bgslick.png";

export const Container = styled.div`
  background-image: url(${slickBg});
  .slick-dots {
    bottom: 3vw;
  }
  .slick-dots li {
    margin: 0 1vw;
  }
  .slick-dots li button::before {
    font-size: 2vw;
    opacity: 1;
  }
`;

export const Item = styled.div`
  /* background-color: black; */
  /* height: 600px; */
  padding: 8vw 0.5vw;
`;

export const Content = styled.div`
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 5px 15px 5px #999;
  font-size: 36px;
  line-height: 100px;
  margin: 0 60px;
  padding: 2%;
  position: relative;
  text-align: center;
`;

export const Header = styled.div`
  img {
    width: 100%;
  }
  iframe {
    width: 100%;
    min-height: 20vw;
    @media (max-width: 700px) {
      min-height: 40vw;
    }
    &.active {
    }
  }
`;
export const Footer = styled.div`
  /* margin: 1.8vw 0; */

  p {
    font-size: 0.9vw;
    line-height: 1.4vw;
    text-transform: uppercase;
    margin-bottom: 1.3vw;

    @media (max-width: 700px) {
      font-size: 2.4vw;
      line-height: 3.5vw;
      margin: 0 0 6.8vw;
    }
  }
`;

export const Button = styled.a`
  width: 8.6vw;
  margin-top: 1vw;
  display: block;
  text-align: center;
  padding: 0vw 0.45vw 0vw 1vw;
  background: #000;
  color: #fff;
  margin: 0 auto;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.3vw;
  line-height: 2.5vw;
  font-size: 0.9vw;
  cursor: pointer;

  @media (max-width: 700px) {
    font-size: 2.5vw;
    width: 21.3vw;
    padding: 2vw 0vw;
  }
`;
