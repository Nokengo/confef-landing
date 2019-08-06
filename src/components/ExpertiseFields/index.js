import React from "react";
import { Container, TextWrap, SlickContainer } from "./styles";
import slickFigure from "../../assets/fgrmc.png";

export default function ExpertiseFields() {
  return (
    <Container>
      <header>
        <TextWrap>
          <h2>Áreas de</h2>
          <h3>Atuação</h3>
        </TextWrap>
      </header>
      <SlickContainer>
        <article>
          <div>
            <img src={slickFigure} alt="" />
          </div>
          <footer>
            <p>
              Crianças que praticam atividades físicas com orientação adequada
              de um Profissional de Educação Física nas escolas desenvolvem o
              senso de coletividade, o foco, a disciplina e ainda melhoram a
              capacidade cognitiva.
            </p>
            <p>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assista
              </a>
            </p>
          </footer>
        </article>
        <article>
          <div>
            <img src={slickFigure} alt="" />
          </div>
          <footer>
            <p>
              Crianças que praticam atividades físicas com orientação adequada
              de um Profissional de Educação Física nas escolas desenvolvem o
              senso de coletividade, o foco, a disciplina e ainda melhoram a
              capacidade cognitiva.
            </p>
            <p>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assista
              </a>
            </p>
          </footer>
        </article>
        <article>
          <div>
            <img src={slickFigure} alt="" />
          </div>
          <footer>
            <p>
              Crianças que praticam atividades físicas com orientação adequada
              de um Profissional de Educação Física nas escolas desenvolvem o
              senso de coletividade, o foco, a disciplina e ainda melhoram a
              capacidade cognitiva.
            </p>
            <p>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assista
              </a>
            </p>
          </footer>
        </article>
      </SlickContainer>
    </Container>
  );
}
