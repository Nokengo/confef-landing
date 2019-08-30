import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slickFigure from "../../assets/fgrmc.png";

import banner1 from "../../assets/banner1.png";

import { Container, Item, Content, Header, Footer, Button } from "./styles";

import YouTube from "react-youtube";

export default class SimpleSlider extends Component {
  state = {
    items: [
      {
        image: "http://i3.ytimg.com/vi/zDpyKtrAYhw/maxresdefault.jpg",
        text:
          "As atividades do Profissional de Educação Física são diversas como, por exemplo, integrar equipes multidisciplinares em hospitais, auxiliando pacientes em preparação para tratamentos ou em recuperação.",
        videoId: "zDpyKtrAYhw",
        player: ""
      },
      {
        image: banner1,
        text:
          "Muita gente não sabe, mas a prática de corridas deve ser orientada e observada por um Profissional de Educação Física. Assim, além de evitar possíveis lesões, o praticante tem mais controle sobre a sua capacidade respiratória.",
        videoId: "SjcOLwV1ivo",
        player: ""
      },
      {
        image: "http://i3.ytimg.com/vi/WHcMQZ0WOy4/maxresdefault.jpg",
        text:
          "Crianças que praticam atividades físicas com orientação adequada de um Profissional de Educação Física nas escolas desenvolvem o senso de coletividade, o foco, a disciplina e ainda melhoram a capacidade cognitiva.",
        videoId: "WHcMQZ0WOy4",
        player: ""
      },
      {
        image: "http://i3.ytimg.com/vi/UP6D6NmXqj0/maxresdefault.jpg",
        text:
          "Além de fazer bem ao corpo, a prática de exercícios físicos com um Profissional de Educação Física traz outros benefícios como acolhimento e inclusão.",
        videoId: "UP6D6NmXqj0",
        player: ""
      },
      {
        image: "http://i3.ytimg.com/vi/cS2rQ71vKTc/maxresdefault.jpg",
        text:
          "A presença de um Profissional de Educação Física nas academias abre perspectivas para pessoas que precisam e devem praticar exercícios físicos, mas têm limitações corporais.",
        videoId: "cS2rQ71vKTc",
        player: ""
      },
      {
        image: "http://i3.ytimg.com/vi/9fBJx0-Tqh4/maxresdefault.jpg",
        text:
          "O Profissional de Educação Física pode e deve estar presente na prática de exercícios físicos ao longo de toda a vida das pessoas, desde os primeiros anos.",
        videoId: "9fBJx0-Tqh4",
        player: ""
      },
      {
        image: "http://i3.ytimg.com/vi/JtXTGjKF3RQ/maxresdefault.jpg",
        text:
          "Alegria, companheirismo, autoestima, bem-estar. O Profissional de Educação Física também pode ajudar a trazer muita diversão e qualidade de vida para a terceira idade.",
        videoId: "JtXTGjKF3RQ",
        player: ""
      }
    ]
  };

  videoOnReady = (e, item) => {
    item.player = e.target;
    const items = [...this.state.items, item];
    this.setState(items);
  };

  handleWatch = (e, item) => {
    e.preventDefault();
    console.log(item);
    item.player.playVideo();
    console.log(item.player.getCurrentTime());
  };
  render() {
    const settings = {
      dots: true,
      arrows: true,
      className: "center",
      centerMode: true,
      infinite: false,
      centerPadding: "30%",
      slidesToShow: 1,
      initialSlide: 2,
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
          {this.state.items.map((item, index) => (
            <Item key={index}>
              <Content>
                <Header>
                  {/* <img src={item.image} alt="" /> */}
                  <YouTube
                    videoId={item.videoId}
                    onReady={e => this.videoOnReady(e, item)}
                  />
                </Header>
                <Footer>
                  <p>{item.text}</p>
                  <Button
                    target="_blank"
                    onClick={e => this.handleWatch(e, item)}
                  >
                    Assista
                  </Button>
                </Footer>
              </Content>
            </Item>
          ))}
        </Slider>
      </Container>
    );
  }
}
