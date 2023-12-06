import styled from "styled-components";
import { typography } from "styles/";
import SVG from "react-inlinesvg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6rem;
  color: var(--dark-text);
  padding: 2rem 1rem;
`;
export const Title = styled.div`
  ${typography.headingMd}
`;
export const Text = styled.div`
  ${typography.buttonLg}
`;

export const Image = styled(SVG)`
  width: auto;
  height: 8rem;
  flex-shrink: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
