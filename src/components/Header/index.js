import React from "react";
import logo from "../../assets/logo.png";
import webdoor from "../../assets/banner_header_play.png";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#" target="_blank">
              Campanha
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Questão de saúde
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Atuação
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Making Of
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
