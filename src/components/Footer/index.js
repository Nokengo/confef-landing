import React from "react";
import footerLogo from "../../assets/footer_logo.png";
import fbIcon from "../../assets/fbicon.png";
import igIcon from "../../assets/igicon.png";
import twtIcon from "../../assets/twticon.png";
import ytIcon from "../../assets/yticon.png";

import { Container, MediaWrap, ContactLinks } from "./styles";

export default function Footer() {
  return (
    <Container id="contato">
      <div>
        <img src={footerLogo} alt="" />
      </div>
      <ContactLinks>
        <p>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Consulte os Inscritos
          </a>
        </p>
        <p>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Legislação
          </a>
        </p>
        <p>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Onde estamos
          </a>
        </p>
        <p>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Contato
          </a>
        </p>
      </ContactLinks>
      <MediaWrap>
        <div>
          <img src={fbIcon} alt="" />
          <img src={igIcon} alt="" />
          <img src={twtIcon} alt="" />
          <img src={ytIcon} alt="" />
        </div>
        <div>
          <p>
            profissiona de educação física
            <br /> a orientação que faz a diferença
          </p>
          <p>2018 - brick e confef - todos os direitos reservasos</p>
        </div>
      </MediaWrap>
    </Container>
  );
}
