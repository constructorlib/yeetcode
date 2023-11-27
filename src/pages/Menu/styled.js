import styled from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  width: 100vw;
  height: max-content;

  position: relative;
  background-color: var(--primary);
`;

export const List = styled.div`
  display: flex;
  width: 100vw;

  gap: 2rem;
  padding: 5rem 0 5rem 5rem;

  overflow-x: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-shrink: 0;
  padding: 1rem 1.5rem;
  /* gap: 1.5rem; */

  width: 75vw;
  height: 27rem;
  border-radius: 15px;
  background-color: var(--button);
`;
export const Title = styled.div`
  ${typography.headingMd}
`;
export const Subtitle = styled.div`
  ${typography.displayMd}
  text-transform: capitalize;
`;
export const Button = styled.div`
  ${typography.buttonLg}

  text-transform: capitalize;
`;
export const Progress = styled.div`
  text-transform: capitalize;
`;
