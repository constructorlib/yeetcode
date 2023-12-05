import styled from "styled-components";
import { typography } from "styles/";
import SVG from "react-inlinesvg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dark-bg);
  color: var(--dark-text);
  padding: 2rem;

  width: 100dvw;
  height: 100dvh;
`;
