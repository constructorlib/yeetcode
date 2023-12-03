import SVG from "react-inlinesvg";
import styled from "styled-components";
import { typography } from "styles/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background-color: var(--dark-bg);
  border-radius: 1.5rem;
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
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;

  background-color: var(--dark-btn-inactive);
  color: var(--dark-text);

  ${typography.captionMd_semibold}

  ::before {
    content: "";
    height: 100%;
    width: calc(100% * ${({ status }) => status});
    border-radius: 2rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background: repeating-linear-gradient(
      -45deg,
      #ff0000,
      #ff0000 1.5rem,
      #8b0505 1.5rem,
      #8b0505 3rem
    );
    position: absolute;
    left: 0;
  }
`;
export const Active = styled.div``;
export const Icon = styled(SVG)`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  right: 0;
  z-index: 999;
  position: absolute;
`;
