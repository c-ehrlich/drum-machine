import { createGlobalStyle } from "styled-components";

import D7MonoWoff from "./D7Mono.woff";
import D7MonoWoff2 from "./D7Mono.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'D7Mono';
    src: local('D7 Mono '), local('D7 Mono '),
    url(${D7MonoWoff2}) format('woff2'),
    url(${D7MonoWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`