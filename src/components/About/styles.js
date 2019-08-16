import styled from "styled-components";
import TextBlock from "../TextBlock";

export const Container = styled.div`
  padding-bottom: 10vw;
  padding-top: 9vw;
  @media only screen and (max-width: 768px) {
    padding-bottom: 0;
    padding-top: 29vw;
  }
  img {
    width: 100%;
    @media only screen and (max-width: 768px) {
      display: none;
    }
    :nth-child(2) {
      display: none;
      @media only screen and (max-width: 768px) {
        display: block;
      }
    }
  }
`;
export const TextWrap = styled.div`
  text-align: center;
  padding-top: 14.5vw;
  line-height: 3.7vw;
  @media only screen and (max-width: 768px) {
    margin-top: 2vw;
    padding: 20px 40px;
    line-height: 28px;
  }
  h2 {
    font-size: 2.4vw;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1vw;
    color: #000;
    @media only screen and (max-width: 768px) {
      font-size: 5.5vw;
      letter-spacing: 7px;
    }
  }
  h3 {
    font-size: 3.8vw;
    text-transform: uppercase;
    font-weight: 400;
    color: #e30613;
    letter-spacing: 0.5vw;
    @media only screen and (max-width: 768px) {
      font-size: 5.5vw;
      font-weight: 700;
      letter-spacing: 6px;
    }
  }
`;

export const TextBox = styled(TextBlock)``;
