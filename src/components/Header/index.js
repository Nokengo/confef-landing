import React from "react";
import logo from "../../assets/logo.png";
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
