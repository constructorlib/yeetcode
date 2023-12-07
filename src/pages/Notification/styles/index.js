import styled from "styled-components";
import SVG from "react-inlinesvg";
import { typography } from "styles/";

export const Container = styled.div`
  width: 100vw;
  height: calc(100dvh - 10rem);

  display: flex;
  flex-direction: column;

  background-color: var(--dark-bg);
  color: var(--dark-btn-inactive);
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${typography.headingMd}

  padding: 2rem 0 1rem 0;
  border-bottom: 3px solid var(--dark-btn-inactive);
`;

export const List = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  overflow-y: auto;
  scroll-behavior: smooth;

  /* hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
