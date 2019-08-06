import React, { Component } from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import ExpertiseFields from "../../components/ExpertiseFields";
import MakingOff from "../../components/MakingOff";

import { Container } from "./styles";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <About />
        <ExpertiseFields />
        <MakingOff />
      </Container>
    );
  }
}
