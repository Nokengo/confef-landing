import React from "react";
import { Container, TextWrap, SlickContainer } from "./styles";
import slickFigure from "../../assets/fgrmc.png";
import SlickCarousel from "../SlickCarousel";

export default function ExpertiseFields() {
  return (
    <Container id="atuacao">
      <header>
        <TextWrap>
          <h2>Áreas de</h2>
          <h3>Atuação</h3>
        </TextWrap>
      </header>
      <SlickCarousel />
    </Container>
  );
}
