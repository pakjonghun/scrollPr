import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  
  body{
    overflow: hidden;
  }


`;

export default GlobalStyles;
