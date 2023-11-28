import styled, { css } from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
`;
export const Title = styled.div`
  ${typography.headingSm}
  color: var(--dark-text);
`;
export const Subtitle = styled.div`
  ${typography.captionSm_semibold}
  color: red;
  text-transform: capitalize;
`;
