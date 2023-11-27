import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { typography } from "styles/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  ${typography.headingMd}
  color: var(--dark-text);
`;
