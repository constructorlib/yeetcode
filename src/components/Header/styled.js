import styled from "styled-components";
import { typography } from "styles/";
import SVG from "react-inlinesvg";

export const Container = styled.div`
  position: absolute;
  top: 0;

  width: 100dvw;
  background-color: transparent;
  z-index: 2;
`;

export const List = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Icon = styled(SVG)`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Course = styled(SVG)`
  width: 4.5rem;
  height: 4.5rem;
`;
export const Span = styled.span`
  ${typography.body_semibold}
  color: var(--dark-text);
`;

export const Bar = styled.div`
  background-color: var(--secondary-bg-darker);
  height: 0.1rem;
  width: 100%;
`;
