import React, { Component } from "react";
import videobanner from "../../assets/banner_header_play.png";
import videobannermobile from "../../assets/header_banner_mobile.png";
import { Container, TextWrap, TextBox } from "./styles";

import videofigure from "../../assets/videofigure_1.png";
import videoAbertura from "../../assets/video_abertura.mp4";

import YouTube from "react-youtube";

import { Player } from "video-react";

export default class About extends Component {
  state = {
    mainVideo: {},
    clickButton: {}
  };

  videoOnReady = (e, item) => {
    console.log(e.target);
    e.target.mute();
    e.target.playVideo();
    this.setState({ mainVideo: e.target });
  };

  render() {
    const opts = {
      width: "100%",
      height: "800",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        muted: 1
      }
    };

    return (
      <Container id="campanha">
        <div>
          {/* <img src={videobanner} alt="" />
          <img src={videobannermobile} alt="" /> */}
          {/* <Player poster={videobanner} src={videoAbertura} autoPlay muted loop /> */}
          <YouTube
            videoId={"Pgq3dTL7lIk"}
            opts={opts}
            onReady={e => this.videoOnReady(e)}
          />
        </div>
        <TextWrap id="questao-saude">
          <h2>Profissional de Educação Física</h2>
          <h3>Por uma questão de saúde</h3>
        </TextWrap>
        <TextBox video={"WHcMQZ0WOy4"} reversed={false}>
          <p>
            Cada dia mais brasileiros vêm praticando atividades físicas. Isso é
            muito bom. Mas, além de evitar o sedentarismo, também é preciso ter
            a orientação adequada para praticar exercícios em segurança.
            <br />
            <br />O Profissional de Educação Física é indicado para isso porque
            tem anos de estudo e conhece a anatomia, as necessidades e os
            limites de cada corpo. Para divulgar o seu trabalho e promover a
            ampliação de sua atuação junto à sociedade, o Sistema CONFEF/CREFs
            está lançando uma campanha para mostrar que a orientação de um
            Profissional de Educação Física não é apenas uma questão de manter a
            boa forma. É uma questão de saúde.
          </p>
        </TextBox>
      </Container>
    );
  }
}
