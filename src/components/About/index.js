import React from "react";
import videobanner from "../../assets/banner_header_play.png";
import { Container, TextWrap } from "./styles";
import TextBlock from "../TextBlock";
import videofigure from "../../assets/videofigure_1.png";

export default function About() {
  return (
    <Container>
      <div>
        <img src={videobanner} alt="" />
      </div>
      <TextWrap>
        <h2>Profissional de Educação Física</h2>
        <h3>Por uma questão de saúde</h3>
      </TextWrap>
      <TextBlock image={videofigure} reversed={false}>
        <p>
          Cada dia mais brasileiros vêm praticando atividades
          <br />
          físicas nos últimos anos. Isso é muito bom. Mas, além de
          <br /> evitar o sedentarismo, também é preciso ter a orientação
          <br /> adequada para praticar exercícios em segurança.
          <br />
        </p>
        <p>
          O Profissional de Educação Física é indicado para isso
          <br /> porque tem anos de estudo e conhece a anatomia, as
          <br /> necessidades e os limites de cada corpo. Para divulgar
          <br /> o seu trabalho e promover a ampliação de sua atuação
          <br /> junto à sociedade, o Sistema CONFEF/Crefs está lançando
          <br /> uma campanha para mostrar que a orientação de um
          <br /> Profissional de Educação Física não é apenas uma
          <br /> questão de manter a boa forma. É uma questão de saúde.
        </p>
      </TextBlock>
    </Container>
  );
}
