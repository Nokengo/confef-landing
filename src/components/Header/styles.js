import styled from "styled-components";
import mobileMenu from "../../assets/menu_mobile.png";

export const Container = styled.header`
  width: 100vw;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 1.8vw 8.8vw 1vw;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 4px 0px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
  img {
    width: 21vw;
    @media only screen and (max-width: 768px) {
      width: 70vw;
    }
  }
  div {
    width: 24.6vw;
    @media only screen and (max-width: 768px) {
      width: 70.6vw;
    }
  }
  nav {
    width: 49.3vw;
    text-transform: uppercase;
    font-weight: 700;
    @media only screen and (max-width: 768px) {
      width: 12.3vw;
      height: 12vw;
      background: url(${mobileMenu});
      background-size: 30px;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
    }
  }
  li {
    font-size: 0.9vw;
    @media only screen and (max-width: 768px) {
      position: relative;
      right: -200%;
    }
  }
  a {
    color: #000;
  }
`;
