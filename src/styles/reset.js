import { css } from "styled-components";
import { breakpoints } from "./utils";

export const reset = css`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Poppins", sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif !important;
  }
  html {
    //! ********************DISCLAIMER********************
    //* this resets Browser Defaults
    //* 1rem == 10px
    //! ********************DISCLAIMER********************
    font-size: 62.5%;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    /* @media only screen and (max-width: 350px) {
      font-size: 50%; //* 1rem = 8px
    } */
  }
  #root {
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;
  }
`;
