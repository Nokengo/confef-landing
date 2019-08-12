import React from "react";
import { Container, Wrapp } from "./styles";
import YouTube from "react-youtube";

export default function TextBlock({ image, video, reversed, children }) {
  return (
    <Container>
      <Wrapp reversed={reversed}>
        {video ? (
          <YouTube videoId={video} />
        ) : (
          <div>
            <img src={image} alt="" />
          </div>
        )}

        <div>
          <article>{children}</article>
        </div>
      </Wrapp>
    </Container>
  );
}
