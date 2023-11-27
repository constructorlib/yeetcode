import styled from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  position: absolute;
  top: 0;

  width: 100dvw;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: transparent;

  z-index: 2;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
