import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 35px 170px 20px;
  div {
    width: 30%;
  }
  nav {
    width: 60%;
    text-transform: uppercase;
    font-weight: 700;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  a {
    color: #000;
  }
`;
