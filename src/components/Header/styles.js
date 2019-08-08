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
  z-index: 99;
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

      position: fixed;
      top: 0;
      right: ${props => (props.show ? "0" : "-100vw")};
      width: 100%;
      height: 100%;
      transition: all 0.5s;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      z-index: 9999;
      top: 0;
      left: 0;
      flex-wrap: wrap;
      flex-direction: column;
      background-color: white;
      padding: 10vw;
      width: 100%;
      height: 100%;
      justify-content: flex-start;
    }
  }
  li {
    font-size: 0.9vw;
    @media only screen and (max-width: 768px) {
      position: relative;
    }
  }
  a {
    color: #000;
    @media only screen and (max-width: 768px) {
      font-size: 4.6vw;
    }
  }
`;

export const CloseMobile = styled.div`
  position: absolute;
  color: black;
  font-size: 4vw;
  z-index: 99999;
  right: 10vw;
  top: 10vw;
  width: auto !important;
  height: auto !important;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85.6vw !important;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: black;
  font-size: 4vw;
  background-image: url(${mobileMenu});
  background-repeat: no-repeat;
  width: 35px;
  height: 35px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
