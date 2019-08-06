import React from "react";
import videobanner from "../../assets/banner_header_play.png";
import { Container, TextWrap } from "./styles";
import TextBlock from "../TextBlock";
import videofigure from "../../assets/videofigure_2.png";
// import { Container } from './styles';

export default function MakingOff() {
  return (
    <Container>
      <TextWrap>
        <h2>Making</h2>
        <h3>Off</h3>
      </TextWrap>
      <TextBlock image={videofigure} reversed={true}>
        <p>
          Para colocar nossos filmes na mídia, foram necessárias
          <br /> muitas horas de trabalho e muita energia de toda a<br /> equipe
          envolvida no processo. Profissionais de Educação
          <br /> Física verdadeiros, com o registro ativo nos seus Crefs,
          <br /> participaram ativamente da produção, atuando.
          <br />
        </p>
        <p>
          Foram quatro locações diferentes, diversos planos
          <br /> filmados, com um casting variado que incluiu de bebês e<br />
          crianças até idosos. Cada cena exige uma boa quantidade
          <br /> de tomadas, para que o diretor possa escolher as que vai
          <br /> utilizar na montagem final de cada filme.
        </p>
      </TextBlock>
    </Container>
  );
}
