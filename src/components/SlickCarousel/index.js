import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slickFigure from "../../assets/fgrmc.png";

import { Container, Item, Content, Header, Footer, Button } from "./styles";

export default class SimpleSlider extends Component {
  state = {
    items: [
      {
        image: "",
        text:
          "As atividades do Profissional de Educação Física são diversas como, por exemplo, integrar equipes multidisciplinares em hospitais, auxiliando pacientes em preparação para tratamentos ou em recuperação.",
        url: ""
      },
      {
        image: "",
        text:
          "Muita gente não sabe, mas a prática de corridas deve ser orientada e observada por um Profissional de Educação Física. Assim, além de evitar possíveis lesões, o praticante tem mais controle sobre a sua capacidade respiratória.",
        url: ""
      },
      {
        image: "",
        text:
          "Crianças que praticam atividades físicas com orientação adequada de um Profissional de Educação Física nas escolas desenvolvem o senso de coletividade, o foco, a disciplina e ainda melhoram a capacidade cognitiva.",
        url: ""
      },
      {
        image: "",
        text:
          "Além de fazer bem ao corpo, a prática de exercícios físicos com um Profissional de Educação Física traz outros benefícios como acolhimento e inclusão.",
        url: ""
      },
      {
        image: "",
        text:
          "A presença de um Profissional de Educação Física nas academias abre perspectivas para pessoas que precisam e devem praticar exercícios físicos, mas têm limitações corporais.",
        url: ""
      },
      {
        image: "",
        text:
          "O Profissional de Educação Física pode e deve estar presente na prática de exercícios físicos ao longo de toda a vida das pessoas, desde os primeiros anos.",
        url: ""
      },
      {
        image: "",
        text:
          "Alegria, companheirismo, autoestima, bem-estar. O Profissional de Educação Física também pode ajudar a trazer muita diversão e qualidade de vida para a terceira idade.",
        url: ""
      }
    ]
  };
  render() {
    const settings = {
      dots: true,
      arrows: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "30%",
      slidesToShow: 1,
      speed: 500,
      responsive: [
        { breakpoint: 700, settings: { centerMode: false } },
        {
          breakpoint: 1200,
          settings: {
            centerPadding: "15%"
          }
        }
      ]
    };

    return (
      <Container>
        <Slider {...settings}>
          <Item>
            <Content>
              <Header>
                <img src={slickFigure} alt="" />
              </Header>
              <Footer>
                <p>
                  Crianças que praticam atividades físicas com orientação
                  adequada de um Profissional de Educação Física nas escolas
                  desenvolvem o senso de coletividade, o foco, a disciplina e
                  ainda melhoram a capacidade cognitiva.
                </p>
                <Button href="http://google.com" target="_blank">
                  Assista
                </Button>
              </Footer>
            </Content>
          </Item>

          <Item>
            <Content>
              <Header>
                <img src={slickFigure} alt="" />
              </Header>
              <Footer>
                <p>
                  Crianças que praticam atividades físicas com orientação
                  adequada de um Profissional de Educação Física nas escolas
                  desenvolvem o senso de coletividade, o foco, a disciplina e
                  ainda melhoram a capacidade cognitiva.
                </p>
                <Button href="http://google.com" target="_blank">
                  Assista
                </Button>
              </Footer>
            </Content>
          </Item>

          <Item>
            <Content>
              <Header>
                <img src={slickFigure} alt="" />
              </Header>
              <Footer>
                <p>
                  Crianças que praticam atividades físicas com orientação
                  adequada de um Profissional de Educação Física nas escolas
                  desenvolvem o senso de coletividade, o foco, a disciplina e
                  ainda melhoram a capacidade cognitiva.
                </p>
                <Button href="http://google.com" target="_blank">
                  Assista
                </Button>
              </Footer>
            </Content>
          </Item>

          <Item>
            <Content>
              <Header>
                <img src={slickFigure} alt="" />
              </Header>
              <Footer>
                <p>
                  Crianças que praticam atividades físicas com orientação
                  adequada de um Profissional de Educação Física nas escolas
                  desenvolvem o senso de coletividade, o foco, a disciplina e
                  ainda melhoram a capacidade cognitiva.
                </p>
                <Button href="http://google.com" target="_blank">
                  Assista
                </Button>
              </Footer>
            </Content>
          </Item>

          <Item>
            <Content>
              <Header>
                <img src={slickFigure} alt="" />
              </Header>
              <Footer>
                <p>
                  Crianças que praticam atividades físicas com orientação
                  adequada de um Profissional de Educação Física nas escolas
                  desenvolvem o senso de coletividade, o foco, a disciplina e
                  ainda melhoram a capacidade cognitiva.
                </p>
                <Button href="http://google.com" target="_blank">
                  Assista
                </Button>
              </Footer>
            </Content>
          </Item>
        </Slider>
      </Container>
    );
  }
}
