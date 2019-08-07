import React, { Component } from "react";
import logo from "../../assets/logo.png";
import { Container } from "./styles";

export default class Header extends Component {
  state = {
    hidden: true
  };
  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    console.log(this.state.hidden);
    if (navigator.userAgent.indexOf("Chrome") >= 0) {
      if (e.path[1].scrollY > 200) {
        this.setState({ hidden: false });
      } else {
        this.setState({ hidden: true });
      }
    } else {
      if (e.pageY > 200) {
        this.setState({ hidden: false });
      } else {
        this.setState({ hidden: true });
      }
    }
  };

  // detectDevice = () => {
  //   if (window.screen.width <= 760) {
  //   }
  // };
  render() {
    return (
      <Container>
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Campanha
              </a>
            </li>
            <li>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Questão de saúde
              </a>
            </li>
            <li>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atuação
              </a>
            </li>
            <li>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Making Of
              </a>
            </li>
            <li>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    );
  }
}
