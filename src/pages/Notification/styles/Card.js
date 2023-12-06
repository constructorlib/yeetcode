import styled from "styled-components";
import SVG from "react-inlinesvg";
import { typography } from "styles/";
import { ButtonBase } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 2rem;
  gap: 2rem;
  width: 100%;
  /* height: 35%; */
  flex-shrink: 0;
  border: 3px solid var(--dark-btn-inactive);
  color: var(--dark-text);
  border-radius: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Image = styled.img`
  width: 12rem;
  flex-shrink: 0;
  object-fit: contain;
`;

export const Title = styled.div`
  ${typography.headingMd}
  padding-left: 6rem;
`;
export const Subtitle = styled.div`
  ${typography.buttonMd}
  color: var(--dark-btn-inactive);
  padding-left: 6rem;
`;
export const Avatar = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const Message = styled.div`
  ${typography.displayLg}
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 1rem;
`;

export const Button = styled(ButtonBase)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.3rem 0;
  width: 17rem;
  border: 2px solid var(--secondary-text);
  border-bottom-width: 4px;
  border-radius: 1rem;
  color: var(--secondary-text);
  text-transform: uppercase;
  ${typography.buttonLg}
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Input = styled.input`
  background-color: transparent;
  border: 2px solid transparent;
  ${typography.buttonLg}
  color: var(--dark-text);

  &::placeholder {
    color: var(--dark-btn-inactive);
  }
  &:focus {
    outline: none;
    border-bottom-color: var(--dark-btn-inactive);
  }
`;
export const Pfp = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
