import { createGlobalStyle } from "styled-components";

import DSDigitalBoldWoff from "./DSDigitalBold.woff";
import DSDigitalBoldWoff2 from "./DSDigitalBold.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'DSDigitalBold';
    src: local('DS Digital Bold'), local('DSDigitalBold'),
    url(${DSDigitalBoldWoff2}) format('woff2'),
    url(${DSDigitalBoldWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`