import styled from "styled-components";
import SVG from "react-inlinesvg";
import { typography } from "styles/";
import { Time } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  gap: 2rem;
`;

export const Meta = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--dark-text);
`;

export const Title = styled.h1`
  ${typography.headingMd}
  letter-spacing: 0.5px;
`;
export const Subtitle = styled.h2`
  ${typography.buttonMd}
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #eca73d;
`;

export const Icon = styled(Time)`
  width: 2rem;
  height: 2rem;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  gap: 1px;
  border: 1px solid var(--dark-btn-inactive);
  background-color: var(--dark-btn-inactive);
  overflow: hidden;
`;
