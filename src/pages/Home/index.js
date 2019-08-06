import React, { Component } from "react";

import { Container } from "./styles";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <header>
          <img src="" alt="" />
        </header>
        <div>
          <ul>
            <li>Campanha</li>
            <li>Questão de saúde</li>
            <li>Atuação</li>
            <li>Making Of</li>
            <li>Contato</li>
          </ul>
        </div>
      </Container>
    );
  }
}
