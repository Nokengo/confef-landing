import React from "react";
import { GlobalStyle } from "./globals/globalStyle";
import Home from "./pages/Home";
import TagManager from "react-gtm-module";
import ReactPixel from "react-facebook-pixel";

const tagManagerArgs = {
  gtmId: "GTM-P8SQN47"
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
