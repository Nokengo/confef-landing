import React from "react";
import footerLogo from "../../assets/footer_logo.png";
import fbIcon from "../../assets/fbicon.png";
import igIcon from "../../assets/igicon.png";
import twtIcon from "../../assets/twticon.png";
import ytIcon from "../../assets/yticon.png";

import AnchorLink from "react-anchor-link-smooth-scroll";

import { Container, MediaWrap, ContactLinks } from "./styles";

export default function Footer() {
  return (
    <Container id="contato">
      <div>
        <img src={footerLogo} alt="" />
      </div>
      <ContactLinks>
        <p>
          <a
            href="https://www.confef.org.br/confef/registrados/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulte os Inscritos
          </a>
        </p>
        <p>
          <a
            href="https://www.confef.org.br/confef/resolucoes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Legislação
          </a>
        </p>
        <p>
          <a
            href="https://www.confef.org.br/confef/fale-conosco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
        </p>
      </ContactLinks>
      <MediaWrap>
        <div>
          <a href="https://www.facebook.com/confef/" target="_blank">
            <img src={fbIcon} alt="" />
          </a>
          <a href="https://www.instagram.com/confef/" target="_blank">
            <img src={igIcon} alt="" />
          </a>
          <a href="https://twitter.com/confef/" target="_blank">
            <img src={twtIcon} alt="" />
          </a>
          <a
            href="https://www.youtube.com/user/SistemaCONFEFCREFs"
            target="_blank"
          >
            <img src={ytIcon} alt="" />
          </a>
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
