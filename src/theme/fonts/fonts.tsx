import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @import url('https://fonts.cdnfonts.com/css/roobert?styles=49579,49575,49577,49581,49571,49573');
        @font-face {
          font-family: 'PPPangramSans';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url("./assets/fonts/PPPangramSans-Thin.ttf") format('ttf');
          unicode-range: U+20, U+21, U+23, U+26-29, U+2C-33, U+35-38, U+3A, U+3F,
            U+41-57, U+61-7A, U+A9, U+E9, U+2013, U+2014, U+2026, U+2AF6, U+1F44B;
        }
    `}
  />
);

export default Fonts;
