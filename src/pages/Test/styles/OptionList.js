import styled, { css, keyframes } from "styled-components";
import { typography } from "styles/";
import SVG from "react-inlinesvg";
import { ButtonBase } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  gap: 5rem;
  color: var(--dark-text);
  padding: 2rem;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;

export const Option = styled(ButtonBase)`
  ${typography.buttonMd}
  background-color: transparent;
  border: 3px solid var(--dark-btn-inactive);
  color: var(--dark-text);
  border-radius: 2rem;
  max-width: 100%;
  min-width: 40%;
  flex-shrink: 0;
  padding: 2rem 3rem;

  word-wrap: break-word; /* IE 5.5-7 */
  white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  white-space: pre-wrap; /* current browsers */

  ${({ selected, value }) =>
    selected === value &&
    css`
      background-color: var(--dark-btn-inactive);
    `}

  &:hover {
    background-color: var(--dark-btn-inactive);
  }
`;

export const Submit = styled(ButtonBase)`
  ${typography.buttonMd}
  padding: 2rem 6rem;
  border-radius: 2rem;
  width: calc(100% - 4rem);
  margin: 0 auto;
  z-index: 2;
  ${({ status }) => {
    switch (status) {
      case "correct":
        return css`
          background-color: var(--dark-btn);
        `;
      case "error":
        return css`
          background-color: var(--dark-btn-error);
        `;

      case "selected":
        return css`
          background-color: var(--dark-btn-text-inactive);
        `;

      default:
        return css`
          background-color: var(--dark-btn-inactive);
        `;
    }
  }};
`;

const forward = keyframes`
  from {
    transform: translateY(100%) ;
    transform-origin: center;
  }
  to {
    transform: translateY(-7rem);
  }
`;

const backward = keyframes`
  from {
    transform: translateY(-7rem);
  }
  to {
    transform: translateY(100%) ;
  }
`;

export const FeedbackWrapper = styled.div`
  width: 100dvw;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Feedback = styled.div`
  position: absolute;
  ${({ status }) => {
    switch (status) {
      case "true":
        return css`
          animation-name: ${forward};
          color: var(--dark-btn);
        `;
      case "false":
        return css`
          animation-name: ${forward};
          color: var(--dark-btn-error);
        `;

      default:
        return css`
          animation-name: ${backward};
        `;
    }
  }}
  animation: 1s forwards ease-in-out;

  width: 100dvw;
  height: 20rem;
  z-index: 1;

  display: flex;
  align-items: flex-start;
  padding: 2rem;
`;
