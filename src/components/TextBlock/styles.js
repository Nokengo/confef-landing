import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4.6vw;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Wrapp = styled.div`
  padding: 0 8vw;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0 5vw;
  }
  div {
    :first-child {
      width: 40vw;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
      img {
        width: 40vw;
        @media only screen and (max-width: 768px) {
          width: 100%;
          margin-top: 35px;
        }
      }
    }
    :last-child {
      width: 55vw;
      display: flex;
      justify-content: center;
      @media only screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
      }
    }
  }
  article {
    p {
      color: #666666;
      font-size: 0.9vw;
      line-height: 1.9vw;
      @media only screen and (max-width: 768px) {
        font-size: 3.5vw;
        line-height: 35px;
        br {
          display: none;
        }
      }
      :nth-child(2) {
        margin-top: 3.1vw;
        @media only screen and (max-width: 768px) {
          margin-top: 3.5vw;
        }
      }
    }
  }
`;
