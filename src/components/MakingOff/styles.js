import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 5.2vw;
  padding-top: 14.5vw;
  img {
    width: 99.7vw;
  }
`;
export const TextWrap = styled.div`
  text-align: center;
  /* margin-top: 14.5vw; */
  line-height: 3.7vw;
  h2 {
    font-size: 6.25vw;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1.6vw;
    display: inline;
    color: #000;
    margin-right: 1vw;
    @media only screen and (max-width: 768px) {
      font-size: 14vw;
    }
  }
  h3 {
    font-size: 6.25vw;
    text-transform: uppercase;
    font-weight: 700;
    color: #e30613;
    letter-spacing: 1vw;
    display: inline;
    @media only screen and (max-width: 768px) {
      font-size: 14vw;
    }
  }
`;
