import React from "react";
import { GlobalStyle } from "./globals/globalStyle";
import Home from "./pages/Home";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";
import "video-react/dist/video-react.css";

const tagManagerArgs = {
  gtmId: "GTM-MMPL9Z8"
};

TagManager.initialize(tagManagerArgs);

const advancedMatching = {}; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false // enable logs
};
ReactPixel.init("2040361046092456", advancedMatching, options);
ReactPixel.pageView();

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
