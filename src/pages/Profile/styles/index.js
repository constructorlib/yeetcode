import SVG from "react-inlinesvg";
import styled from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  width: 100dvw;
  height: calc(100dvh - 10rem);
  display: flex;
  flex-direction: column;
  background-color: var(--dark-bg);
`;
export const Image = styled.img`
  width: 100dvw;
  height: 20rem;
  object-fit: contain;
  background-color: #b6e3f4;
`;

export const Icon = styled(SVG)`
  width: 2.5rem;
  height: 2.5rem;
`;
export const Settings = styled(SVG)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 3.5rem;
  height: 3.5rem;

  cursor: pointer;

  path {
    fill: var(--dark-btn-inactive);
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  padding: 2rem 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  min-width: max-content;
  width: calc((100% - 2rem) / 2);
  padding: 1rem 2rem;

  border-radius: 1rem;
  border: 3px solid var(--dark-btn-inactive);
`;
export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  ${typography.displayMd}
  color: var(--dark-text);
  gap: 1rem;
`;
export const CardSubtitle = styled.div`
  color: var(--dark-btn-text-inactive);
  text-transform: capitalize;
  margin-left: 3rem;
  ${typography.captionSm_semibold}
`;
