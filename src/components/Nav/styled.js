import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div`
  width: 100dvw;
  background-color: transparent;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(SVG)`
  width: 3.5rem;
  height: 3.5rem;
`;
