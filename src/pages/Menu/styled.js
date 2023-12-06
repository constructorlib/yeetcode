import styled from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 10rem);

  display: flex;
  flex-direction: column;

  position: relative;
  background-color: var(--secondary-bg);
`;

export const List = styled.div`
  display: flex;
  width: 100vw;
  gap: 2rem;
  padding: 5rem 0 5rem 5rem;
  margin-top: auto;
  overflow-x: auto;

  /* hide scrollbar */

  scrollbar-width: none;

  /* Firefox */

  -ms-overflow-style: none;

  /* IE 10+ */

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  /* Chrome */
  & ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-corner,
  ::-webkit-resizer,
  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
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
  height: 30rem;
  border-radius: 2rem;
  background-color: var(--secondary-bg-darker);
`;
export const Title = styled.div`
  ${typography.headingMd}
  color: var(--dark-text);
`;
export const Subtitle = styled.div`
  ${typography.displayMd}
  color: var(--dark-text);
  text-transform: capitalize;
`;

export const Button = styled.div`
  ${typography.buttonLg}
  text-transform: capitalize;

  display: grid;
  place-content: center;

  width: 100%;
  height: 4rem;
  border-radius: 1.5rem;
  box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.75);

  background-color: ${(props) => (props.bg === "dark" ? "var(--dark-bg)" : "var(--secondary-bg)")};
  color: ${(props) => (props.bg === "dark" ? "var(--secondary-bg-darker)" : "var(--dark-text)")};
`;
export const Progress = styled.div`
  text-transform: capitalize;
`;
