import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { typography } from "styles/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100dvw;
  gap: 1.5rem;
  border-bottom: 1px solid var(--dark-btn-text-inactive);
`;

export const Title = styled.h1`
  ${typography.displayLg}
  color: var(--dark-text);
`;
