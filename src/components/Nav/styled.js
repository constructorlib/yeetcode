import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100dvw;
  background-color: transparent;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1rem;
  background-color: var(--dark-bg);

  border-top: 1px solid var(--dark-btn-text-inactive);
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border-radius: 1rem;

  ${(props) =>
    props.active === "active" &&
    css`
      border: 2px solid var(--secondary-text);
    `}
`;

export const Icon = styled(SVG)`
  width: 3.5rem;
  height: 3.5rem;
`;
