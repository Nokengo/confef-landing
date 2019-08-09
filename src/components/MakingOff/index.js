import React from "react";
import { Container, TextWrap } from "./styles";
import TextBlock from "../TextBlock";
import videofigure from "../../assets/videofigure_2.png";
// import { Container } from './styles';

export default function MakingOff() {
  return (
    <Container id="making-of">
      <TextWrap>
        <h2>Making</h2>
        <h3>Of</h3>
      </TextWrap>
      <TextBlock image={videofigure} reversed={true}>
        <p>
          Para colocar nossos filmes na mídia, foram necessárias muitas horas de
          trabalho e muita energia de toda a equipe envolvida no processo.
          Profissionais de Educação Física verdadeiros, com o registro nos seus
          Crefs, participaram ativamente da produção, atuando.
        </p>
        <p>
          Foram quatro locações diferentes, diversos planos filmados, com um
          casting variado que incluiu de bebês e crianças até idosos. Cada cena
          exige uma boa quantidade de tomadas, para que o diretor possa escolher
          as que vai utilizar na montagem final de cada filme.
        </p>
      </TextBlock>
    </Container>
  );
}
