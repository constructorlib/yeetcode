import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { typography } from "styles/";

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  flex-shrink: 0;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--dark-text);
  ${({ status }) =>
    status === "active" &&
    css`
      background-color: var(--dark-btn-inactive);
      color: var(--dark-btn);
    `}
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  margin-left: -0.5rem;
  margin-right: -1rem;
  flex-shrink: 0;
`;
export const Icon = styled(SVG)`
  height: 4rem;
  width: 4rem;
`;
export const Avatar = styled.img`
  display: inline-block;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
`;

export const Text = styled.h1`
  ${typography.headingSm}
`;
export const Span = styled.span`
  margin-left: auto;
  ${typography.buttonLg}
`;

export const Number = styled.span`
  ${typography.headingSm}
  color: var(--dark-btn);
`;
