import SVG from "react-inlinesvg";
import styled from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background-color: #560404;
`;
export const MetaWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Meta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled(SVG)`
  width: 12rem;
  height: 12rem;
`;

export const Subtitle = styled.div``;
export const Title = styled.h1``;
export const Span = styled.span``;
