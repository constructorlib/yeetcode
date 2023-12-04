import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Icon = styled(SVG)`
  width: 5rem;
  height: 5rem;
  ${({ status }) =>
    status === "inactive" &&
    css`
      filter: grayscale(100%);
    `}
`;
export const Main = styled(SVG)`
  width: 8rem;
  height: 8rem;
`;
