import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slickFigure from "../../assets/fgrmc.png";

import { Container, Item, Content, Header, Footer, Button } from "./styles";

export default class SimpleSlider extends Component {
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
