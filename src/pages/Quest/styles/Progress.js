import SVG from "react-inlinesvg";
import styled from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background-color: #448b2d;
`;
export const Title = styled.h1``;
export const Progress = styled.span``;
export const Icon = styled(SVG)`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
`;
