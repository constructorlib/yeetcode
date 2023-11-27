import styled, { css } from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
`;
export const Title = styled.div`
  ${typography.headingMd}
  color: var(--dark-text);
`;
export const Subtitle = styled.div`
  ${typography.displayMd}
  color: red;
  text-transform: capitalize;
`;
