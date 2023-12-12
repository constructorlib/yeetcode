import SVG from "react-inlinesvg";
import styled from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 10rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: var(--dark-bg);
`;
