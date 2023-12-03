import SVG from "react-inlinesvg";
import styled from "styled-components";
import { typography } from "styles/";
import { Time } from "@styled-icons/boxicons-regular/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #8b0505;
`;
export const MetaWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Meta = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;

  color: var(--dark-text);
`;

export const Image = styled(SVG)`
  width: 15rem;
  height: 15rem;
  flex-shrink: 0;
  flex-grow: 1;
  path {
    fill: #ff0000 !important;
  }
`;

export const Subtitle = styled.span`
  color: #8b0505;

  background-color: var(--dark-text);
  padding: 0.2rem 0.5rem;
  ${typography.buttonMd};
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.5rem;
  letter-spacing: 0.5px;
`;
export const Title = styled.h1`
  ${typography.displayMd};
  font-weight: 700;
  letter-spacing: 1px;
`;
export const Span = styled.span`
  ${typography.body_regular};
  font-weight: 600;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  color: #3e0909;
`;

export const TimeIcon = styled(Time)`
  width: 1.5rem;
`;
