import React from "react";
import logo from "../../assets/logo.png";
import { Container } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <AnchorLink href="#campanha">Campanha</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#questao-saude">Questão de saúde</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#atuacao">Atuação</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#making-of">Making Of</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contato">Contato</AnchorLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
