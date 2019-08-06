import styled from "styled-components";

export const Container = styled.div`
  margin-top: 90px;
`;

export const Wrapp = styled.div`
  padding: 0 180px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
  div {
    width: 45%;
  }
  article {
    p {
      :nth-child(2) {
        margin-top: 60px;
      }
    }
  }
`;
