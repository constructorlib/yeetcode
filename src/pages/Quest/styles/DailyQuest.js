import styled from "styled-components";
import SVG from "react-inlinesvg";
import { typography } from "styles/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 12rem;
  gap: 2rem;
  padding: 2rem;
  padding-left: 9rem;
  background-color: var(--dark-bg);
  position: relative;
`;

export const Title = styled.h1`
  ${typography.displayMd}
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--dark-text);
`;
export const ProgressBar = styled.div`
  position: relative;

  width: 100%;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;

  background-color: var(--dark-btn-inactive);
  color: #d9991b;

  ${typography.captionMd_semibold}

  ::before {
    content: "";
    height: 100%;
    width: calc(100% * ${({ status }) => status});
    border-radius: 2rem;

    background: #ffd423;
    position: absolute;
    left: 0;
  }
`;
export const Active = styled.div`
  z-index: 99;
`;
export const Icon = styled(SVG)`
  width: 6rem;
  height: 6rem;
  right: 0;
  position: absolute;
`;

export const Image = styled(SVG)`
  width: 7rem;
  height: 7rem;
  position: absolute;
  left: 1rem;
`;
