import React, { Component } from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import ExpertiseFields from "../../components/ExpertiseFields";
import MakingOff from "../../components/MakingOff";
import Footer from "../../components/Footer";

import { Container } from "./styles";

export default class Home extends Component {
  state = {
    prevScrollpos: window.pageYOffset,
    visible: true
  };

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <Container>
        <Header visible={this.state.visible} />
        <About />
        <ExpertiseFields />
        {/* <MakingOff /> */}
        <Footer />
      </Container>
    );
  }
}
