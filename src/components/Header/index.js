import React, { Component } from "react";
import logo from "../../assets/logo.png";
import { Container, CloseMobile, HeaderBox, Button } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class Header extends Component {
  state = {
    show: false
  };
  handleButton = e => {
    e.preventDefault();
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  render() {
    console.log(this.props.visible);
    return (
      <Container
        show={this.state.show}
        visible={this.props.visible}
        onClick={this.handleButton}
      >
        <HeaderBox>
          <img src={logo} alt="" />
          <Button onClick={this.handleButton} />
        </HeaderBox>
        <nav>
          <ul>
            <li>
              <AnchorLink href="#campanha" onClick={this.handleButton}>
                Campanha
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#questao-saude" onClick={this.handleButton}>
                Questão de saúde
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#atuacao" onClick={this.handleButton}>
                Atuação
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#making-of" onClick={this.handleButton}>
                Making Of
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contato" onClick={this.handleButton}>
                Contato
              </AnchorLink>
            </li>
          </ul>
          <CloseMobile onClick={this.handleButton}>x</CloseMobile>
        </nav>
      </Container>
    );
  }
}
