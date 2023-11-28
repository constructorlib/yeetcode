import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { typography } from "styles/";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--dark-text);
`;

export const Icon = styled(SVG)`
  height: 3rem;
  width: 3rem;
`;
export const Avatar = styled.img`
  display: inline-block;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
`;

export const Text = styled.h1`
  ${typography.headingSm}
`;
export const Span = styled.span`
  margin-left: auto;
  ${typography.displayMd}
`;

export const Number = styled.span``;
