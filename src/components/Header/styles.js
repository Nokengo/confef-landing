import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 1.8vw 8.8vw 1vw;
  img {
    width: 21vw;
  }
  div {
    width: 24.6vw;
  }
  nav {
    width: 49.3vw;
    text-transform: uppercase;
    font-weight: 700;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    font-size: 0.9vw;
  }
  a {
    color: #000;
  }
`;
