import React from "react";
import { Container, Wrapp } from "./styles";

export default function TextBlock({ image, reversed, children }) {
  return (
    <Container>
      <Wrapp reversed={reversed}>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <article>{children}</article>
        </div>
      </Wrapp>
    </Container>
  );
}
