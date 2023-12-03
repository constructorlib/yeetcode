import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { typography } from "styles/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 100%;
  padding: 1rem 0;
  /* hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  background-color: transparent;
  bottom: 15%;
  right: 5%;
`;
export const Button = styled.button`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 7rem;
`;
export const Icon = styled(SVG)`
  width: 6.5rem;
  height: 6.5rem;
  padding: 1rem;
  border-radius: 50%;
  background: repeating-linear-gradient(
    -45deg,
    #d290fe,
    #d290fe 1.5rem,
    #d47ff8 1.5rem,
    #d47ff8 3rem
  );
`;
export const Text = styled.div`
  ${typography.buttonMd}
  font-weight: 500;
  background-color: green;
  border-radius: 4rem;
  margin-top: -1.5rem;
  width: 100%;
  height: 3rem;
  display: grid;
  place-items: center;
  color: var(--dark-text);
  background-color: #ce82ff;
  border: 2px solid var(--dark-bg);
`;
