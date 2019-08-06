import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  padding: 4.6vw 12vw 4.6vw 13vw;
  justify-content: space-between;
  background: #b2b2b2;
  div {
    width: 24vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 700;
  }
  img {
    width: 11vw;
  }
  p {
    font-size: 0.9vw;
    text-transform: uppercase;
    a {
      color: #000;
    }
  }
`;

export const MediaWrap = styled.div`
  display: flex;
  flex-direction: column;
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
      & + img {
        margin-left: 30px;
      }
    }
    p {
      display: block;
      font-size: 0.8vw;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      :last-child {
        font-size: 0.5vw;
        font-weight: 300;
      }
    }
  }
`;
