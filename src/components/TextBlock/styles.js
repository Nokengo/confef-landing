import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4.6vw;
`;

export const Wrapp = styled.div`
  padding: 0 8vw;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
  div {
    :first-child {
      width: 40vw;
      img {
        width: 40vw;
      }
    }
    :last-child {
      width: 55vw;
      display: flex;
      justify-content: center;
    }
  }
  article {
    p {
      color: #666666;
      font-size: 0.9vw;
      line-height: 1.9vw;
      :nth-child(2) {
        margin-top: 3.1vw;
      }
    }
  }
`;
