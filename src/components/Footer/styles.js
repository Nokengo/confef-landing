import styled from "styled-components";

export const Container = styled.div`
  /* width: 100vw; */
  display: flex;
  padding: 4.6vw 12vw 4.6vw 13vw;
  justify-content: space-between;
  background: #b2b2b2;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 410px;
    padding: 50px;
  }
  div {
    width: 24vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 700;
    @media only screen and (max-width: 768px) {
      width: auto;
    }
  }
  img {
    width: 11vw;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
  p {
    font-size: 0.9vw;
    text-transform: uppercase;
    @media only screen and (max-width: 768px) {
      font-size: 3vw;
      letter-spacing: 3px;
    }
    a {
      color: #000;
    }
  }
`;

export const ContactLinks = styled.div`
  width: 24vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
    p {
      line-height: 30px;
    }
  }
`;

export const MediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    padding: 20px 0;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    :last-child {
      flex-wrap: wrap;
      margin-top: 1.5vw;
    }
    img {
      width: 3.2vw;
      @media only screen and (max-width: 768px) {
        width: 15%;
        margin-bottom: 10px;
        margin-top: 40px;
      }
      & + img {
        margin-left: 1.5vw;
        @media only screen and (max-width: 768px) {
          margin-left: 15px;
        }
      }
    }
    p {
      display: block;
      font-size: 0.8vw;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      @media only screen and (max-width: 768px) {
        font-size: 3.2vw;
        letter-spacing: 1px;
      }
      :last-child {
        font-size: 0.5vw;
        font-weight: 300;
        @media only screen and (max-width: 768px) {
          font-size: 2.6vw;
          font-weight: 300;
          letter-spacing: 0;
        }
      }
    }
  }
`;
