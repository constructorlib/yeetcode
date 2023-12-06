import SVG from "react-inlinesvg";
import styled from "styled-components";
import { typography } from "styles/";
import { CloseOutline } from "styled-icons/evaicons-outline/";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  /* padding: 2rem; */
  border-radius: 1.5rem;
`;

export const ProgressBar = styled.div`
  position: relative;

  width: 100%;
  height: 2rem;

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

    background: var(--dark-btn);
    position: absolute;
    left: 0;
  }
`;

export const DismissIconContainer = styled.div``;

export const DismissIcon = styled(CloseOutline)`
  width: 4.5rem;
  height: 4.5rem;
`;

export const HeartIcon = styled(SVG)`
  width: 3.5rem;
  height: 3.5rem;
`;

export const HeartIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: red;
  ${typography.buttonLg}
  font-weight: 700;
`;
