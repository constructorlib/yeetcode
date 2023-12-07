import styled, { css, keyframes } from "styled-components";
import { typography } from "styles/";
import SVG from "react-inlinesvg";
import { Time, CheckDouble, CheckCircle } from "@styled-icons/boxicons-regular/";
import { ButtonBase } from "@mui/material";

const forward = keyframes`
  from {
    transform: translateY(100dvh) ;
    transform-origin: center;
  }
  to {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  gap: 5rem;
  height: 100%;
  width: 100%;
`;

export const Image = styled(SVG)`
  width: 20rem;
  height: auto;

  animation: 1500ms forwards ease-out;
  animation-name: ${forward};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  animation: 1000ms forwards ease-out;
  animation-name: ${forward};
`;

export const Title = styled.div`
  ${typography.headingXl}
  color: #feca00;
  text-align: center;
`;

export const Description = styled.div`
  ${typography.displayMd}
  font-weight: 700;
  color: var(--dark-text);
  text-align: center;
`;

export const Button = styled(ButtonBase)`
  ${typography.buttonLg}
  text-transform: uppercase;
  font-weight: 600;
  background-color: var(--secondary-text);
  color: var(--dark-bg);
  border-radius: 1.5rem;
  padding: 2rem 6rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  position: absolute;
  bottom: 3rem;
  border-bottom: 5px solid #1476a3ff;
`;

export const StatsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  animation: 500ms forwards ease-out;
  animation-name: ${forward};

  /* gap: 3rem; */
`;

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ color }) => color};
  color: var(--dark-bg);
  height: 10rem;
  width: 10rem;
  border-radius: 1rem;
  padding: 0.3rem;
`;

export const StatsTitle = styled.div`
  ${typography.body_semibold}
  color: var(--dark-bg);
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  height: 25%;
`;

export const StatsValue = styled.div`
  ${typography.buttonLg}
  font-weight: 700;
  background-color: var(--dark-bg);
  height: 75%;
  width: 100%;
  border-radius: 1rem;

  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const StatsIcon = styled(SVG)`
  height: 2.5rem;
  width: auto;
  g > path {
    fill: ${({ color }) => color} !important;
  }
`;

const cssIcon = css`
  height: 2.5rem;
  width: auto;
  color: ${({ color }) => color};
`;
export const TimeIcon = styled(Time)`
  ${cssIcon}
`;
export const CheckIcon = styled(CheckDouble)`
  ${cssIcon}
`;
