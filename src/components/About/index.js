import React from "react";
import videobanner from "../../assets/banner_header_play.png";
import videobannermobile from "../../assets/header_banner_mobile.png";
import { Container, TextWrap, TextBox } from "./styles";

import videofigure from "../../assets/videofigure_1.png";
import videoAbertura from "../../assets/video_abertura.mp4";

import { Player } from "video-react";

export default function About() {
  return (
    <Container id="campanha">
      <div>
        {/* <img src={videobanner} alt="" />
        <img src={videobannermobile} alt="" /> */}
        <Player poster={videobanner} src={videoAbertura} />
      </div>
      <TextWrap id="questao-saude">
        <h2>Profissional de Educação Física</h2>
        <h3>Por uma questão de saúde</h3>
      </TextWrap>
      <TextBox video={"WHcMQZ0WOy4"} reversed={false}>
        <p>
          Cada dia mais brasileiros vêm praticando atividades físicas. Isso é
          muito bom. Mas, além de evitar o sedentarismo, também é preciso ter a
          orientação adequada para praticar exercícios em segurança.
          <br />
          <br />O Profissional de Educação Física é indicado para isso porque
          tem anos de estudo e conhece a anatomia, as necessidades e os limites
          de cada corpo. Para divulgar o seu trabalho e promover a ampliação de
          sua atuação junto à sociedade, o Sistema CONFEF/CREFs está lançando
          uma campanha para mostrar que a orientação de um Profissional de
          Educação Física não é apenas uma questão de manter a boa forma. É uma
          questão de saúde.
        </p>
      </TextBox>
    </Container>
  );
}
